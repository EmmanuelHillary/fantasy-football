import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  Matches,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'testuser',
    description: 'Unique username of a user',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-z0-9]+$/, {
    message: 'Username must only contain lowercase letters and numbers.',
  })
  username: string;

  @ApiProperty({ example: 'test@mail.com', description: "User's email id" })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Testpassword1#', description: "User's password" })
  @IsNotEmpty()
  @MinLength(6)
  @MinLength(8) // Minimum length of 8 characters
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message:
        'Password too weak. It must contain at least one uppercase letter, one lowercase letter, one number, and one special character(@$!%*?&).',
    },
  )
  @IsString()
  password: string;
}
