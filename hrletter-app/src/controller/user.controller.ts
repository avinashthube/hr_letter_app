import { Controller } from '@nestjs/common';
import { UserService } from 'src/service/user.service';
@Controller('employee/profile')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
