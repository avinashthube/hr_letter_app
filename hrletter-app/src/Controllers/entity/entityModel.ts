import * as mongoose from 'mongoose';

export const entityModel = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
