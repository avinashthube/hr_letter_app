import { Entity } from './entityInterface';
import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { EntityService } from './entity.service';
import { EntityType } from './createEntity.dto';

@Controller('admin/entity')
export class EntityController {
  constructor(private readonly entityService: EntityService) {}

  @Post()
  async createEntity(@Body() createEntityDto: EntityType) {
    return this.entityService.createEntity(createEntityDto);
  }

  @Get(':entityType')
  async findSingleEntity(@Param('entityType') entityType: string) {
    let result = this.entityService.findSingleEntity(entityType);
    console.log(result);
    return result;
  }

  @Get()
  async findAllEntities(): Promise<Entity[]> {
    return this.entityService.findAllEntities();
  }

  @Delete(':entityId')
  async deleteEntity(@Param('entityId') entityId: string) {
    return await this.entityService.deleteEntity(entityId);
    //return null;
  }

  @Put(':entityId')
  async updateEntity(
    @Param('entityId') entityId: string,
    @Body('entityType') entityType: string,
  ) {
    return await this.entityService.updateEntity(entityId, entityType);
    //return 'Record Updated';
  }
}
