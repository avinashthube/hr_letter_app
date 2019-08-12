import { UserInterface } from './../interface/user.interface';
import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
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

  async findSingleUser(userID: string) {
    let user;
    try {
      user = await this.userModel.find({ userID: userID }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find  user.');
    }
    if (!user) {
      throw new NotFoundException('Could not find  user.');
    }
    console.log(user);
    return user;
  }

  async findAllUsers() {
    return await this.userModel.find().exec();
  }

  async updateUser(userId: string, createUserDto: UserInput) {
    return await this.userModel
      .findOneAndUpdate(
        { userID: userId },
        {
          firstName: createUserDto.firstName,
          lastName: createUserDto.lastName,
          email: createUserDto.email,
          updatedBy: createUserDto.updatedBy,
          lastUpdateDate: Date.now(),
        },
        {
          new: true,
        },
      )
      .exec();
  }
}
