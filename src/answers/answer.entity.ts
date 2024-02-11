import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Question } from "src/questions/questions.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Answer{
    
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    answerString: string;

    @Column({nullable: true})
    @Field({nullable: true})
    isCorrect?: boolean;

    @Column()
    @Field(type => Int)
    questionId: number;

    @ManyToOne(() => Question, question => question.answers)
    @Field(type => Question)
    question: Question;

}