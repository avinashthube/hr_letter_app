import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class EntityType {
  @Field()
  readonly entityID: string;
  @Field()
  readonly entityType: string;
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
