import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CommunityModule } from './community/community.module';
import { LeagueModule } from './league/league.module';
import { TeamModule } from './team/team.module';
import { PlayerModule } from './player/player.module';
import { FantasyTeamModule } from './fantasy_team/fantasy_team.module';
import { FixtureModule } from './fixture/fixture.module';
import { GameweekModule } from './gameweek/gameweek.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule,
    UserModule,
    CommunityModule,
    LeagueModule,
    TeamModule,
    PlayerModule,
    FantasyTeamModule,
    FixtureModule,
    GameweekModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
