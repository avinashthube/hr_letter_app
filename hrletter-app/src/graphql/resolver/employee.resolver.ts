import { EmployeeSpecific } from './../../dto/employeespecific.dto';
import { EmployeeInput } from '../input/employee.input';
import { EmployeeType } from '../../dto/employee.dto';
import { EmployeeService } from '../../service/employee.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

@Resolver()
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => [EmployeeSpecific])
  async findAllEmployees() {
    console.log(this.employeeService.findAllEmployees());
    return await this.employeeService.findAllEmployees();
  }

  @Mutation(() => EmployeeType)
  async createEmployee(@Args('employeeInput') employeeInput: EmployeeInput) {
    return await this.employeeService.createEmployee(employeeInput);
  }

  @Mutation(() => EmployeeType)
  async deleteEmployee(@Args('employeeId') employeeId: string) {
    return await this.employeeService.deleteEmployee(employeeId);
  }

  @Mutation(() => EmployeeType)
  async updateEmployee(
    @Args('employeeId') employeeId: string,
    @Args('employeeInput') employeeInput: EmployeeInput,
  ) {
    return await this.employeeService.updateEmployee(employeeId, employeeInput);
  }
}
