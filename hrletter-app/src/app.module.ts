import { AppService } from './app.service';
import { AppController } from './app.controller';
import { DatabaseModule } from './config/database/database.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AllModules } from './module/all.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
    }),
    AllModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
