import { Field, InputType } from 'type-graphql';
/*
  Holds input types for -university- entity.
  UniversityInput type will be required for create university
  mutation responsible for creating a new record in database.
*/
@InputType()
class UniversityInput {
  @Field() readonly id: number;
  @Field() readonly name: string;
  @Field() readonly city: string;
  @Field() readonly state: string;
  @Field() readonly country: string;
  @Field({ nullable: true })
  readonly number_of_staff?: number;
}

export default UniversityInput;