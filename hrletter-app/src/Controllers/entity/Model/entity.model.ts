import * as mongoose from 'mongoose';
import * as uuid from 'uuid/v4';

const U1 = uuid();

const u2 = U1.replace(/-/g, '');
console.log('id', u2);

export const entityModel = new mongoose.Schema({
  createdBy: String,
  createdOn: { type: Date, default: Date.now() },
  deletedBy: String,
  entityID: {
    type: String, // mongoose.Schema.Types.ObjectId,
    default: u2,
  },
  lastUpdateDate: { type: Date, default: Date.now() },
  entityType: { type: String, uppercase: true },
  updatedBy: String,
});
