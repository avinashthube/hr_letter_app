import { EmployeeInput } from './employee.input';
import { EmployeeType } from './../dto/createEmployee.dto';
import { EmployeeService } from './../employee.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

@Resolver()
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => [EmployeeType])
  async findAllEmployees() {
    console.log(this.employeeService.findAllEmployees());
    return this.employeeService.findAllEmployees();
  }

  @Mutation(() => EmployeeType)
  async createEmployee(@Args('employeeInput') employeeInput: EmployeeInput) {
    return this.employeeService.createEmployee(employeeInput);
  }

  @Mutation(() => EmployeeType)
  async deleteEmployee(@Args('employeeId') employeeId: string) {
    return this.employeeService.deleteEmployee(employeeId);
  }

  @Mutation(() => EmployeeType)
  async updateEmployee(
    @Args('employeeId') employeeId: string,
    @Args('employeeInput') employeeInput: EmployeeInput,
  ) {
    return this.employeeService.updateEmployee(employeeId, employeeInput);
  }
}
