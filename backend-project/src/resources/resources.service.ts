import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resource } from './entities/resource.entity';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ResourcesService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Resource)
    private readonly resourceRepository: Repository<Resource>,
  ) {}

  // Executing when the server starts
  async onApplicationBootstrap() {
    console.log('--- 🔄 Synchronising the JSON data... ---');
    try {
      const filePath = path.resolve(process.cwd(), 'data.json');
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const resources = JSON.parse(fileContent);

      for (const data of resources) {
        // Already existing?
        const existing = await this.resourceRepository.findOneBy({ title: data.title });

        if (existing) {
          // updatinf if existing
          await this.resourceRepository.update(existing.id, data);
        } else {
          // otherwise, creating the content
          await this.resourceRepository.save(data);
        }
      }
      console.log('--- ✅ Synchronisation finished! ---');
    } catch (error) {
      console.error('--- ❌ Error :', error.message);
    }
  }

  async findAll() {
    return await this.resourceRepository.find();
  }

  async findOne(id: number) {
    return await this.resourceRepository.findOneBy({ id });
  }

  create(createResourceDto: CreateResourceDto) {
    const newResource = this.resourceRepository.create(createResourceDto);
    return this.resourceRepository.save(newResource);
  }

  async update(id: number, updateResourceDto: UpdateResourceDto) {
    await this.resourceRepository.update(id, updateResourceDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.resourceRepository.delete(id);
    return { deleted: true };
  }
}