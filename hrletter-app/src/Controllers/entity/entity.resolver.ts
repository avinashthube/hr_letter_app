import { EntityType } from './createEntity.dto';
import { EntityService } from './entity.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EntityInput } from './entity.input';

@Resolver()
export class EntityResolver {
  constructor(private readonly entityService: EntityService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [EntityType])
  async entities() {
    console.log(this.entityService.findAll());
    return this.entityService.findAll();
  }

  @Mutation(() => EntityType)
  async createEntity(@Args('input') input: EntityInput) {
    return this.entityService.create(input);
  }
}
