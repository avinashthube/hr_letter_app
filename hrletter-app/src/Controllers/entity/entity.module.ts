import { MongooseModule } from '@nestjs/mongoose';
import { EntityController } from './entity.controller';
import { EntityService } from './entity.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/Controllers/database/database.module';
import { entityProvider } from './entity-provider';
import { EntityResolver } from './graphql/entity.resolver';
import { entityModel } from './Model/entity.model';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Entity', schema: entityModel }]),
  ],
  controllers: [EntityController],
  providers: [EntityService, ...entityProvider, EntityResolver],
})
export class EntityModule {}
