import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import RepoModule from './repo.module';
import UniversityResolver from './resolvers/university.resolver';

const graphQLImports = [ UniversityResolver ];

@Module({
  imports: [
    TypeOrmModule.forRoot(), RepoModule, ...graphQLImports,
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql', playground: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
