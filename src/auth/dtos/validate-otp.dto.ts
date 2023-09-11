import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class ValidateOtpDto {
  @ApiProperty({ example: 'test@email.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 123455 })
  @IsNotEmpty()
  @IsNumber()
  otp: number;
}
