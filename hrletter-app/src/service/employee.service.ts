import { UserService } from './user.service';
import { EmployeeInput } from '../graphql/input/employee.input';
import { Model } from 'mongoose';
import { EmployeeInterface } from '../interface/employee.interface';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { UserType } from 'src/dto/user.dto';
import * as uuid from 'uuid/v4';
import { UserModule } from 'src/module/user.module';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject('EMPLOYEE_MODEL')
    private readonly employeeModel: Model<EmployeeInterface>,
    private readonly userService: UserService,
  ) {}

  async createEmployee(createEmployeeDto: EmployeeInput) {
    try {
      const u2 = uuid().replace(/-/g, '');
      console.log('id', u2);

      const createdEmployee = new this.employeeModel(createEmployeeDto);
      createdEmployee.employeeID = u2;
      await createdEmployee.save();

      // creating user record employeeID == userID

      const createUserDto = new UserType();

      createUserDto.userID = u2;
      createUserDto.firstName = createEmployeeDto.firstName;
      createUserDto.lastName = createEmployeeDto.lastName;
      createUserDto.email = createEmployeeDto.email;
      await this.userService.createUser(createUserDto); //createUser(createUserDto);

      return 'Employee Record Created';
    } catch (e) {
      console.log('Employee record creation failure');
      return 'Employee record creation failure';
    }
  }

  async findSingleEmployee(employeeID: string) {
    let employee;
    try {
      employee = await this.employeeModel
        .find({ employeeID: employeeID })
        .exec();
    } catch (error) {
      throw new NotFoundException('Could not find  employee.');
    }
    if (!employee) {
      throw new NotFoundException('Could not find  employee.');
    }
    console.log(employee);
    return employee;
  }

  async findAllEmployees() {
    return await this.employeeModel.find().exec();
  }

  async deleteEmployee(employeeID: string) {
    const result = await this.employeeModel
      .deleteOne({ employeeID: employeeID })
      .exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find  employee Type.');
    }
    return ' employee Deleted';
  }

  async updateEmployee(employeeId: string, createEmployeeDto: EmployeeInput) {
    return await this.employeeModel
      .findOneAndUpdate(
        { employeeID: employeeId },
        {
          firstName: createEmployeeDto.firstName,
          lastName: createEmployeeDto.lastName,
          lastUpdateDate: Date.now(),
        },
        {
          new: true,
        },
      )
      .exec();
  }
}
