import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';
import { employeeProvider } from './employee.provider';
import { EmployeeResolver } from './graphql/employee.resolver';
import { employeeModel } from './model/employee.model';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Employee', schema: employeeModel }]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService, ...employeeProvider, EmployeeResolver],
})
export class EmployeeModule {}
