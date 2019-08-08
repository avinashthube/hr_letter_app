import * as mongoose from 'mongoose';
import * as uuid from 'uuid/v4';

const U1 = uuid();

const u2 = U1.replace(/-/g, '');
console.log('id', u2);

export const entityModel = new mongoose.Schema({
  created_by: String,
  created_on: { type: Date, default: Date.now },
  deleted_by: String,
  entityID: {
    type: String, //mongoose.Schema.Types.ObjectId,
    default: u2,
  },
  last_update_date: { type: Date, default: Date.now },
  entityType: String,
  updated_by: String,
});
