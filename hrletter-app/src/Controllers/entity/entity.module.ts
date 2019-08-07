import { MongooseModule } from '@nestjs/mongoose';
import { EntityController } from './entity.controller';
import { EntityService } from './entity.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/Controllers/database/database.module';
import { entityProviders } from './entity-provider';
import { EntityResolver } from './entity.resolver';
import { entityModel } from './entityModel';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Entity', schema: entityModel }]),
  ],
  controllers: [EntityController],
  providers: [EntityService, ...entityProviders, EntityResolver],
})
export class EntityModule {}
