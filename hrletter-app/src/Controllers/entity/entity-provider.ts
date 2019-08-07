import { Connection } from 'mongoose';
import { entityModel } from './entityModel';

export const entityProviders = [
  {
    provide: 'ENTITY_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Entity', entityModel),
    inject: ['DATABASE_CONNECTION'],
  },
];
