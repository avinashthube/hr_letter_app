import * as mongoose from 'mongoose';
import * as uuid from 'uuid/v4';

const u1 = uuid();

const u2 = u1.replace(/-/g, '');
console.log('id', u2);

export const employeeModel = new mongoose.Schema({
  employeeID: { type: String, default: u2 }, // required field
  officeID: String, // based on officeID fetch different offices
  address: {
    addressLine: String,
    city: String,
    state: String,
    country: String,
    pinCode: String,
  },
  agreementPeriod: Number, //gives either days or months
  createdBy: String,
  updatedBy: String,
  deletedBy: String,
  createdOn: { type: Date, default: Date.now() },
  dateOfJoining: Date, //(‘dd-mm-yyyy') add validation required field
  dateOfRelieving: Date, //(‘dd-mm-yyyy')
  // dateOfRequest 	: Date, NOT Required
  departmentID: String, // based on departmentID fetch departmentName
  designation: String, // required filed
  email: String, // required field
  firstName: String, // required field
  lastName: String, // required field
  lastUpdateDdate: { type: Date, default: Date.now() },
  password: String, //admin will have option to generate password or system generate
  periodEndDate: Date,
  periodOfAppraisal: Date,
  periodStartDate: Date,
  phoneNumber: String,
  registrationLink: String, //notification for entities to register on there personal email
  revisedAmount: Number,
  salary: Number, // final salary to be paid to employee
  status: String,
  tagCode: String, //Admin while creating & store it in  tag Schema //call microservice
  tenureOfService: Number,
});
