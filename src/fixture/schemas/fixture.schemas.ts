import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Player } from '../../player/schemas/player.schema';
import { Team } from '../../team/schemas/team.schema';
import { Gameweek } from '../../gameweek/schemas/gameweek.schemas';

@Schema()
export class Fixture extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true })
  homeTeam: Team;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true })
  awayTeam: Team;

  @Prop({ required: true })
  homeScore: number;

  @Prop({ required: true })
  awayScore: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }] })
  homeTeamScorers: Player[]; // Players who scored for the home team

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }] })
  awayTeamScorers: Player[]; // Players who scored for the away team'

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gameweek',
    required: true,
  })
  gameweek: Gameweek;
}

export const FixtureSchema = SchemaFactory.createForClass(Fixture);
