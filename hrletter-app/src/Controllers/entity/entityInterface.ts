import { Document } from 'mongoose';

export interface Entity extends Document {
  readonly entityType: string;
}
