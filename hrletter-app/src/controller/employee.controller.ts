import { EmployeeType } from '../dto/employee.dto';
import { EmployeeService } from '../service/employee.service';
import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Put,
} from '@nestjs/common';

@Controller('admin/employee/profile')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Body() createEmployeeDto: EmployeeType) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @Get(':employeeID')
  async findSingleEmployee(@Param('employeeID') employeeID: string) {
    const result = this.employeeService.findSingleEmployee(employeeID);
    console.log(result);
    return result;
  }
  @Get()
  async findAllEmployees() {
    const result = await this.employeeService.findAllEmployees();
    console.log(result);
    return result;
  }

  @Delete(':employeeID')
  async deleteEmployee(@Param('employeeID') employeeID: string) {
    return await this.employeeService.deleteEmployee(employeeID);
  }

  @Put(':employeeId')
  async updateEntity(
    @Param('employeeId') employeeId: string,
    @Body() createEmployeeDto: EmployeeType,
  ) {
    return await this.employeeService.updateEmployee(
      employeeId,
      createEmployeeDto,
    );
    // return 'Record Updated';
  }
}
