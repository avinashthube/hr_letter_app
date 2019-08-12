import { EntityModule } from './entity.module';
import { EmployeeModule } from './employee.module';
import { Module } from '@nestjs/common';
import { UserModule } from './user.module';

@Module({
  imports: [EmployeeModule, EntityModule, UserModule],
})
export class AllModules {}
