import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class EntityType {
  @Field(() => ID)
  entityId: string;
  @Field()
  readonly entityType: string;
}
