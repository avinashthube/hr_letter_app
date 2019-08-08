import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class EntityType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly breed: string;
}
