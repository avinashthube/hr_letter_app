import { Connection } from 'mongoose';
import { employeeModel } from '../model/employee.model';
import { userModel } from 'src/model/user.model';

export const employeeProvider = [
  {
    provide: 'EMPLOYEE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Employee', employeeModel),
    inject: ['DATABASE_CONNECTION'],
  },
];
