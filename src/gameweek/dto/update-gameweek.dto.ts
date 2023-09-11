import { PartialType } from '@nestjs/mapped-types';
import { CreateGameweekDto } from './create-gameweek.dto';

export class UpdateGameweekDto extends PartialType(CreateGameweekDto) {}
