import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import RepoService from '../repo.service';
import University from '../db/models/university.entity';
import UniversityInput from './input/university.input';

@Resolver()
class UniversityResolver {
  constructor(private readonly repoService: RepoService) { }

  @Query(() => [University])
  public async universities(): Promise<University[]> {
    return this.repoService.universityRepo.find({
      order: { name: 'ASC' },
    });
  }

  @Query(() => University, {nullable: true})
  public async university(@Args('id') id: number): Promise<University> {
    return this.repoService.universityRepo.findOne(id);
  }

  @Mutation(() => University)
  public async createUniversity(@Args('data') input: UniversityInput):
      Promise<University> {
    const university = this.repoService.universityRepo.create({
      name: input.name, city: input.city,
      state: input.state, country: input.country,
      number_of_staff: input.number_of_staff,
    });
    return  this.repoService.universityRepo.save(university);
  }

  @Mutation(() => University)
  public async deleteUniversity(@Args('id') id: number):
    Promise<University> {
    const deletedUniv = this.repoService.universityRepo.findOne(id);
    this.repoService.universityRepo.delete(id);
    return deletedUniv;
  }

  @Mutation(() => University)
  public async updateUniversity(@Args('data') input: UniversityInput):
    Promise<University> {
    let updUni = await this.repoService.universityRepo.findOne(input.id);
    updUni.name = input.name; updUni.city = input.city;
    updUni.state = input.state; updUni.country = input.country;
    updUni.number_of_staff = input.number_of_staff;
    return this.repoService.universityRepo.save(updUni);
  }
}

export default UniversityResolver;