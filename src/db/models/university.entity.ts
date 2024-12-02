import {
  Column, CreateDateColumn, Entity,
  PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
@Entity({name: 'universities'})
export default class University {
  @Field() @PrimaryGeneratedColumn() id: number;

  @Field() @Column() name: string;
  @Field() @Column() city: string;
  @Field() @Column() state: string;
  @Field() @Column() country: string;

  @Field() @CreateDateColumn({name: 'created_at'}) createdAt: Date;
  @Field() @UpdateDateColumn({name: 'updated_at'}) updatedAt: Date;
  @Field({ nullable: true }) @Column({ nullable: true }) number_of_staff?: number;
}