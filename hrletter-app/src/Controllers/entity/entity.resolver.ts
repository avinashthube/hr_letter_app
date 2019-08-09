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
  async findAllEntities() {
    console.log(this.entityService.findAllEntities());
    return this.entityService.findAllEntities();
  }

  @Mutation(() => EntityType)
  async createEntity(@Args('input') input: EntityInput) {
    return this.entityService.createEntity(input);
  }

  // @Mutation(() => EntityType)
  // async updateEntity(@Args('input') input: EntityInput) {
  //   return this.entityService.updateEntity(input);
  // }
}
