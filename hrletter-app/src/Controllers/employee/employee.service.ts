import { EmployeeInput } from './graphql/employee.input';
import { Model } from 'mongoose';
import { EmployeeInterface } from './interface/employee.interface';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject('EMPLOYEE_MODEL')
    private readonly employeeModel: Model<EmployeeInterface>,
  ) {}

  async createEmployee(createEmployeeDto: EmployeeInput) {
    try {
      const createdEmployee = new this.employeeModel(createEmployeeDto);
      console.log(createdEmployee);
      return await createdEmployee.save();
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
