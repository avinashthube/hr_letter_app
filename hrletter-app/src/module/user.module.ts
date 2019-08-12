import { UserController } from './../controller/user.controller';
import { UserService } from './../service/user.service';
import { userModel } from './../model/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './../config/database/database.module';
import { Module } from '@nestjs/common';
import { userProvider } from 'src/provider/user.provider';
@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'User', schema: userModel }]),
  ],
  controllers: [UserController],
  providers: [UserService, ...userProvider],
  exports: [UserService],
})
export class UserModule {}
