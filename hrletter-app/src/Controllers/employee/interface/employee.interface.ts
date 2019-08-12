import { Document } from 'mongoose';

export interface EmployeeInterface extends Document {
  readonly address: string;
  readonly agreementPeriod: number;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly deletedBy: string;
  readonly dateOfJoining: Date;
  readonly dateOfRelieving: Date;
  readonly departmentID: string;
  readonly designation: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly lastUpdateDate: Date;
  readonly password: string;
  readonly periodEndDdate: Date;
  readonly periodOfAppraisal: Date;
  readonly periodStartDate: Date;
  readonly phoneNumber: string;
  readonly registrationLink: string;
  readonly revisedAmount: number;
  readonly salary: number;
  readonly status: string;
  readonly tagCode: string;
  readonly tenureOfService: number;
}
