import { Test, TestingModule } from '@nestjs/testing';
import { Entity } from './entity';

describe('Entity', () => {
  let provider: Entity;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Entity],
    }).compile();

    provider = module.get<Entity>(Entity);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
