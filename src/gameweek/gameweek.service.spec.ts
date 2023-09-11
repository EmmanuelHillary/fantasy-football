import { Test, TestingModule } from '@nestjs/testing';
import { GameweekService } from './gameweek.service';

describe('GameweekService', () => {
  let service: GameweekService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameweekService],
    }).compile();

    service = module.get<GameweekService>(GameweekService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
