import { EntityType } from '../dto/createEntity.dto';
import { EntityService } from '../entity.service';
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
  async createEntity(@Args('entityInput') entityInput: EntityInput) {
    return this.entityService.createEntity(entityInput);
  }

  @Mutation(() => EntityType)
  async deleteEntity(@Args('entityType') entityType: string) {
    return this.entityService.deleteEntity(entityType);
  }

  @Mutation(() => EntityType)
  async updateEntity(
    @Args('entityId') entityId: string,
    @Args('entityType') entityType: string,
  ) {
    return this.entityService.updateEntity(entityId, entityType);
  }
}
