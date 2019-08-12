import { EntityModule } from './entity.module';
import { EmployeeModule } from './employee.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [EmployeeModule, EntityModule],
})
export class AllModules {}
