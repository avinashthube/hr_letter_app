import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class EntityInput {
  @Field()
  readonly entityType: string;
}
