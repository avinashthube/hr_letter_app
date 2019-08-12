import { Controller, Get, Param, Delete, Put, Body } from '@nestjs/common';
import { UserService } from 'src/service/user.service';
import { UserType } from 'src/dto/user.dto';
@Controller('employee/profile')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userID')
  async findSingleUser(@Param('userID') userID: string) {
    const result = this.userService.findSingleUser(userID);
    console.log(result);
    return result;
  }

  @Get()
  async findAllUsers() {
    const result = await this.userService.findAllUsers();
    console.log(result);
    return result;
  }
  /*
  //delete not required
  @Delete(':userID')
  async deleteUser(@Param('userID') userID: string) {
    return await this.userService(userID);
  }*/

  @Put(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() createUserDto: UserType,
  ) {
    return await this.userService.updateUser(userId, createUserDto);
    // return 'Record Updated';
  }
}
