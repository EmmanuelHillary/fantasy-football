import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/schemas/user.schema';
import { Model } from 'mongoose';
import { Otp } from '../user/schemas/otp.schema';
import { ValidateOtpDto } from './dtos/validate-otp.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('OTP') private readonly otpModel: Model<Otp>,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userModel.findOne({
      $or: [{ username }, { email: username }],
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async validateOtp(payload: ValidateOtpDto) {
    const { email, otp } = payload;
    const otpModel = await this.otpModel
      .findOne({ email, otp })
      .orFail(new HttpException('INVALID OTP', 400));
    if (otpModel.expirationTime)
  }

  async generateAccessToken(user: any) {
    const payload = { username: user.username, sub: user.id };
    return this.jwtService.sign(payload);
  }

  async validateUserById(userId: string) {
    return this.userModel.findById(userId).exec();
  }
}
