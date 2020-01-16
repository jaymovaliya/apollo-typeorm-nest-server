import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepoService from './repo.service';
import University from './db/models/university.entity';

@Global()
@Module({
  imports: [ TypeOrmModule.forFeature([ University ]) ],
  providers: [RepoService],
  exports: [RepoService],
})

class RepoModule {}
export default RepoModule;
