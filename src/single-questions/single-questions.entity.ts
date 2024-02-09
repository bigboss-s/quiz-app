import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Answer } from "src/answers/answer.entity";
import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class SingleQuestions{

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @OneToMany(() => Answer, answer => answer.question)
    @Field
}