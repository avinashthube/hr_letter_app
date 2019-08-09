import { EntityType } from './createEntity.dto';
import { EntityInput } from './entity.input';
import { Entity } from './entityInterface';
import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { json } from 'body-parser';

@Injectable()
export class EntityService {
  constructor(
    @Inject('ENTITY_MODEL')
    private readonly entityModel: Model<Entity>,
  ) {}

  async createEntity(createEntityDto: EntityInput) {
    let count = await this.entityModel
      .count({ entityType: createEntityDto.entityType })
      .exec();
    if (count) {
      console.log('Create Entity Error', count);
      return 'Entity Name Already Exist';
    } else {
      const createdEntity = new this.entityModel(createEntityDto);
      console.log(createdEntity);
      return await createdEntity.save();
    }
  }

  async findSingleEntity(entityType: string) {
    let entity;
    try {
      entity = await this.entityModel.find({ entityType: entityType }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find entity.');
    }
    if (!entity) {
      throw new NotFoundException('Could not find entity.');
    }
    console.log(entity);
    return entity;
  }

  async findAllEntities(): Promise<Entity[]> {
    return await this.entityModel.find().exec();
  }

  async deleteEntity(entityId: string) {
    const result = await this.entityModel
      .deleteOne({ entityID: entityId })
      .exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find product.');
    }
  }

  async updateEntity(entityId: string, entityType: string) {
    let count = await this.entityModel.count({ entityType: entityType }).exec();
    console.log('Entity count: ', count);
    if (count) {
      return 'Entity type already exist';
    } else {
      return await this.entityModel
        .findOneAndUpdate(
          { entityID: entityId },
          { entityType: entityType, last_update_date: Date.now() },
          {
            new: true,
          },
        )
        .exec();
    }
  }
}
