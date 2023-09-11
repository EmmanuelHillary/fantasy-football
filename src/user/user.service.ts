import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { EmailService } from '../email/email.service';
import { Otp } from './schemas/otp.schema';
import { OTPGenerator } from './utils';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('OTP') private readonly otpModel: Model<Otp>,
    private readonly emailService: EmailService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password } = createUserDto;
    const existingUser = await this.userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      throw new ConflictException('Username or email already exists.');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });

    // OTP Creation
    const expirationTime = new Date(
      Date.now() + parseInt(process.env.OTP_EXPIRATION),
    );
    const otp = OTPGenerator();
    const otpModel = await this.otpModel.create({
      email,
      otp,
      expirationTime,
    });
    await otpModel.save();

    // Send OTP
    this.emailService.sendOTP(email, otp);
    return newUser.save();
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.userModel
      .findOne({
        $or: [{ username }, { email: username }],
      })
      .exec();
    if (!user) {
      throw new NotFoundException(
        `User with username '${username}' not found.`,
      );
    }
    return user;
  }

  async findById(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException(`User with ID '${userId}' not found.`);
    }
    return user;
  }
}
