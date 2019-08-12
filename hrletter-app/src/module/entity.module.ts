import { MongooseModule } from '@nestjs/mongoose';
import { EntityController } from '../controller/entity.controller';
import { EntityService } from '../service/entity.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database/database.module';
import { entityProvider } from '../provider/entity-provider';
import { EntityResolver } from '../graphql/resolver/entity.resolver';
import { entityModel } from '../model/entity.model';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Entity', schema: entityModel }]),
  ],
  controllers: [EntityController],
  providers: [EntityService, ...entityProvider, EntityResolver],
})
export class EntityModule {}
