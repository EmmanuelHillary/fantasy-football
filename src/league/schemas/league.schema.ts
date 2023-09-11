import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Community } from '../../community/schemas/community.schema';
import { Team } from '../../team/schemas/team.schema';
import { User } from '../../user/schemas/user.schema';
import { Gameweek } from '../../gameweek/schemas/gameweek.schemas';

enum LeagueType {
  FivePlayersOneKeeper = '5_players_1_keeper',
  TenPlayersOneKeeper = '10_players_1_keeper',
}

@Schema()
export class League extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: LeagueType; // Type of league (5 players + 1 keeper or 10 players + 1 keeper)

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
    required: true,
  })
  community: Community; // Reference to the community this league belongs to

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  members: User[]; // Users who are part of this league

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }] })
  teams: Team[]; // Teams created within this league

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  admins: User[]; // Users who are admins of this league

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy: User;

  @Prop({ required: true, default: Date.now })
  created: Date; // Date when the league was created

  @Prop({ required: true })
  description: string;

  @Prop()
  icon: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Gameweek' }] })
  gameweeks: Gameweek[];
}

export const LeagueSchema = SchemaFactory.createForClass(League);
