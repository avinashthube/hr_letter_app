import { Connection } from 'mongoose';
import { employeeModel } from '../model/employee.model';

export const employeeProvider = [
  {
    provide: 'EMPLOYEE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Employee', employeeModel),
    inject: ['DATABASE_CONNECTION'],
  },
];
