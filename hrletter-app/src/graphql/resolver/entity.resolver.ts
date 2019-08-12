import { EntityType } from '../../dto/entity.dto';
import { EntityService } from '../../service/entity.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EntityInput } from '../input/entity.input';

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
    return await this.entityService.findAllEntities();
  }

  @Mutation(() => EntityType)
  async createEntity(@Args('entityInput') entityInput: EntityInput) {
    return await this.entityService.createEntity(entityInput);
  }

  @Mutation(() => EntityType)
  async deleteEntity(@Args('entityType') entityType: string) {
    return await this.entityService.deleteEntity(entityType);
  }

  @Mutation(() => EntityType)
  async updateEntity(
    @Args('entityId') entityId: string,
    @Args('entityType') entityType: string,
  ) {
    return await this.entityService.updateEntity(entityId, entityType);
  }
}
