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

@Controller('entity')
export class EntityController {
  constructor(private readonly entityService: EntityService) {}

  @Post()
  async createEntity(@Body() createEntityDto: EntityType) {
    this.entityService.create(createEntityDto);
  }

  @Get()
  async findAll(): Promise<Entity[]> {
    return this.entityService.findAll();
  }

  @Delete(':entityId')
  async deleteEntity(@Param('entityId') entityId: string) {
    await this.entityService.delete(entityId);
    return null;
  }

  @Put(':entityId')
  async updateEntity(
    @Param('entityId') entityId: string,
    @Body('entityType') entityType: string,
  ) {
    await this.entityService.updateEntity(entityId, entityType);
    return null;
  }
}
