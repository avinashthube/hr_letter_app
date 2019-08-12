import { Address } from './address.dto';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class EmployeeSpecific {
  @Field() readonly employeeID: string;
  @Field() readonly address: string;
  @Field() readonly designation: string;
  @Field() readonly email: string;
  @Field() readonly firstName: string;
  @Field() readonly lastName: string;
  @Field() readonly phoneNumber: string;
}
