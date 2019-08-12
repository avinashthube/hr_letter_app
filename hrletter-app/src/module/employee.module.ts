import { UserModule } from './user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeController } from '../controller/employee.controller';
import { EmployeeService } from '../service/employee.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../config/database/database.module';
import { employeeProvider } from '../provider/employee.provider';
import { EmployeeResolver } from '../graphql/resolver/employee.resolver';
import { employeeModel } from '../model/employee.model';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Employee', schema: employeeModel }]),
    UserModule,
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService, ...employeeProvider, EmployeeResolver],
})
export class EmployeeModule {}
