import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class UserType {
  @Field()
  userID: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  email: string;
  @Field()
  userStatus: string;
  @Field()
  password: string;
  @Field({ nullable: true })
  readonly createdBy: string;
  @Field()
  readonly createdOn: Date;
  @Field({ nullable: true })
  readonly deletedBy: string;
  @Field()
  readonly lastUpdateDate: Date;
  @Field({ nullable: true })
  readonly updatedBy: string;
}
