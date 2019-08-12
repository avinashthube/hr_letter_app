import { UserInterface } from './../interface/user.interface';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { UserInput } from 'src/graphql/input/user.input';
@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<UserInterface>,
  ) {}

  async createUser(createUserDto: UserInput) {
    try {
      const createUser = new this.userModel(createUserDto);
      console.log('User Record', createUser);

      await createUser.save();
      return 'User record created';
    } catch (e) {
      console.log('User record creation failure');
      return 'User record creation failure';
    }
  }
}
