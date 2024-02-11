import { Field, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Answer } from "src/answers/answer.entity";
import { Quiz } from "src/quizzes/quiz.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum QuestionType {
    SINGLE_ANSWER = 'SINGLE_ANSWER',
    MULTIPLE_ANSWERS = 'MULTIPLE_ANSWERS',
    ORDERED_ANSWERS = 'ORDERED_ANSWERS',
    OPEN_ANSWER = 'OPEN_ANSWER'
}

registerEnumType(QuestionType, {
    name: 'QuestionType',
});

@Entity()
@ObjectType()
export class Question{
    
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    questionString: string;

    @Column({
        type: 'enum',
        enum: QuestionType,
        default: QuestionType.SINGLE_ANSWER
    })
    @Field(type => QuestionType)
    type: QuestionType;

    @Column()
    @Field(type => Int)
    quizId: number;

    @ManyToOne(() => Quiz, quiz => quiz.questions)
    @Field(type => Quiz)
    quiz: Quiz;

    @OneToMany(() => Answer, answer => answer.question)
    @Field(type => Answer)
    answers?: Answer[]

}