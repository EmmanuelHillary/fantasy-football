import { PartialType } from '@nestjs/mapped-types';
import { CreateFantasyTeamDto } from './create-fantasy_team.dto';

export class UpdateFantasyTeamDto extends PartialType(CreateFantasyTeamDto) {}
