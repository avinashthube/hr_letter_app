import * as mongoose from 'mongoose';

export const userModel = new mongoose.Schema({
  createdBy: String,
  createdOn: { type: Date, default: Date.now() },
  deletedBy: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String, // Admin will generate or system generated
  userStatus: String, //Active or Inactive
  lastUpdateDate: { type: Date, default: Date.now() },
  updatedBy: String,
  userID: String, // equals to employeeID
});
