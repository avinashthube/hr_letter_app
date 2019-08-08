import { Document } from 'mongoose';

export interface Entity extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
