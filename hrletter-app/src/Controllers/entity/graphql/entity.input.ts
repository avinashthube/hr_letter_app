import { InputType, Field } from 'type-graphql';

@InputType()
export class EntityInput {
  @Field()
  readonly entityType: string;
}
