import { EntityType } from './createEntity.dto';
import { EntityInput } from './entity.input';
import { Entity } from './entityInterface';
import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';

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

  async delete(entityId: string) {
    const result = await this.entityModel
      .deleteOne({ entityID: entityId })
      .exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find product.');
    }
  }
  async findEntity(entityId: string) {
    let entity;
    try {
      entity = await this.entityModel.find({ entityId }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find entity.');
    }
    if (!entity) {
      throw new NotFoundException('Could not find entity.');
    }
    return entity;
  }

  async updateEntity(entityId: string, entityType: string) {
    // const updatedEntity = await this.findEntity(entityId);
    // if (entityType) {
    //   updatedEntity.entityType = entityType;
    //   updatedEntity.last_update_date = new Date();
    // }
    // await updatedEntity.save();

    return await this.entityModel.findOneAndUpdate(
      { entityId: { entityId } },
      entityType,
      {
        new: true,
      },
    );
  }
}
