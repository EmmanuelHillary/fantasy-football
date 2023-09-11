import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'test@mail.com',
    description: "User's email or Username",
  })
  @IsNotEmpty()
  @IsEmail()
  username: string;

  @ApiProperty({ example: 'Testpassword1#', description: "User's password" })
  @IsNotEmpty()
  password: string;
}
