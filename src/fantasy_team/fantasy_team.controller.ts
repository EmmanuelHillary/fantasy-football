import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FantasyTeamService } from './fantasy_team.service';
import { CreateFantasyTeamDto } from './dto/create-fantasy_team.dto';
import { UpdateFantasyTeamDto } from './dto/update-fantasy_team.dto';

@Controller('fantasy-team')
export class FantasyTeamController {
  constructor(private readonly fantasyTeamService: FantasyTeamService) {}

  @Post()
  create(@Body() createFantasyTeamDto: CreateFantasyTeamDto) {
    return this.fantasyTeamService.create(createFantasyTeamDto);
  }

  @Get()
  findAll() {
    return this.fantasyTeamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fantasyTeamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFantasyTeamDto: UpdateFantasyTeamDto) {
    return this.fantasyTeamService.update(+id, updateFantasyTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fantasyTeamService.remove(+id);
  }
}
