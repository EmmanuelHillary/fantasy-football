import { Module } from '@nestjs/common';
import { GameweekService } from './gameweek.service';
import { GameweekController } from './gameweek.controller';

@Module({
  controllers: [GameweekController],
  providers: [GameweekService],
})
export class GameweekModule {}
