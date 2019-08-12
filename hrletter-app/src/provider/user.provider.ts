import { Connection } from 'mongoose';
import { userModel } from 'src/model/user.model';

export const userProvider = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('User', userModel),
    inject: ['DATABASE_CONNECTION'],
  },
];
