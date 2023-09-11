import { Injectable } from '@nestjs/common';
import { CreateFantasyTeamDto } from './dto/create-fantasy_team.dto';
import { UpdateFantasyTeamDto } from './dto/update-fantasy_team.dto';

@Injectable()
export class FantasyTeamService {
  create(createFantasyTeamDto: CreateFantasyTeamDto) {
    return 'This action adds a new fantasyTeam';
  }

  findAll() {
    return `This action returns all fantasyTeam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fantasyTeam`;
  }

  update(id: number, updateFantasyTeamDto: UpdateFantasyTeamDto) {
    return `This action updates a #${id} fantasyTeam`;
  }

  remove(id: number) {
    return `This action removes a #${id} fantasyTeam`;
  }
}
