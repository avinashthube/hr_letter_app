import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Address {
  readonly addressLine: string;
  @Field()
  readonly city: string;
  @Field()
  readonly state: string;
  @Field()
  readonly country: string;
  @Field()
  readonly pinCode: string;
}
