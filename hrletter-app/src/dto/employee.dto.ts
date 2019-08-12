// import { Address } from './address.dto';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class EmployeeType {
  @Field() readonly employeeID: string;
  @Field() readonly officeID: string;
  @Field() readonly address: string;
  @Field() readonly agreementPeriod: number;
  @Field() readonly createdBy: string;
  @Field() readonly updatedBy: string;
  @Field() readonly deletedBy: string;
  @Field() readonly createdOn: Date;
  @Field() readonly dateOfJoining: Date;
  @Field() readonly dateOfRelieving: Date;
  @Field() readonly departmentID: string;
  @Field() readonly designation: string;
  @Field() readonly email: string;
  @Field() readonly firstName: string;
  @Field() readonly lastName: string;
  @Field({ nullable: true }) readonly lastUpdateDate: Date;
  @Field() readonly password: string;
  @Field() readonly periodEndDdate: Date;
  @Field() readonly periodOfAppraisal: Date;
  @Field() readonly periodStartDate: Date;
  @Field() readonly phoneNumber: string;
  @Field() readonly registrationLink: string;
  @Field() readonly revisedAmount: number;
  @Field() readonly salary: number;
  @Field() readonly status: string;
  @Field() readonly tagCode: string;
  @Field() readonly tenureOfService: number;
}
