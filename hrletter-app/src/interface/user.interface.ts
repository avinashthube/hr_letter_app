import { Document } from 'mongoose';

export interface UserInterface extends Document {
  createdBy: string;
  createdOn: Date;
  deletedBy: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string; // Admin will generate or system generated
  userStatus: string; //Active or Inactive
  lastUpdateDate: Date;
  updatedBy: string;
  userID: string; // equals to employeeID
}
