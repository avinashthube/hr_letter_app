import { Connection } from 'mongoose';
import { entityModel } from './Model/entity.model';

export const entityProvider = [
  {
    provide: 'ENTITY_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Entity', entityModel),
    inject: ['DATABASE_CONNECTION'],
  },
];
