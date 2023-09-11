import { Module } from '@nestjs/common';
import { FantasyTeamService } from './fantasy_team.service';
import { FantasyTeamController } from './fantasy_team.controller';

@Module({
  controllers: [FantasyTeamController],
  providers: [FantasyTeamService],
})
export class FantasyTeamModule {}
