import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { ApiTags } from '@nestjs/swagger';

ApiTags('Auth');
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body() payload: LoginDto,
  ): Promise<{ accessToken: string } | { message: string }> {
    const { username, password } = payload;
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    const accessToken = await this.authService.generateAccessToken(user);
    return { accessToken };
  }
}
