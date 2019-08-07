import { Entity } from './entityInterface';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { EntityService } from './entity.service';
import { EntityType } from './createEntity.dto';

@Controller('entity')
export class EntityController {
  constructor(private readonly entityService: EntityService) {}

  @Post()
  async create(@Body('name') createEntityDto: EntityType) {
    this.entityService.create(createEntityDto);
  }

  @Get()
  async findAll(): Promise<Entity[]> {
    return this.entityService.findAll();
  }
}
