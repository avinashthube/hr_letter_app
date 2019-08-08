import { EntityInput } from './entity.input';
import { Entity } from './entityInterface';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class EntityService {
  constructor(
    @Inject('ENTITY_MODEL')
    private readonly entityModel: Model<Entity>,
  ) {}

  async create(createEntityDto: EntityInput): Promise<Entity> {
    const createdEntity = new this.entityModel(createEntityDto);
    console.log(createdEntity);
    return await createdEntity.save();
  }

  async findAll(): Promise<Entity[]> {
    return await this.entityModel.find().exec();
  }
}
