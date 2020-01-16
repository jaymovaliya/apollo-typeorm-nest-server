import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import University from './db/models/university.entity';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(University)
    public readonly universityRepo: Repository<University>,
  ) {}
}

export default RepoService;
