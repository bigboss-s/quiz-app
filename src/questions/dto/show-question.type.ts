import { Field, ObjectType } from "@nestjs/graphql";
import { QuestionType } from "../questions.entity";
import { ShowAnswerDTO } from "src/answers/dto/show-answer.type";

@ObjectType()
export class ShowQuestionDTO {
    @Field()
    questionString: string;

    @Field(type => QuestionType)
    type: QuestionType;

    @Field(type => [ShowAnswerDTO], {nullable: 'itemsAndList'})
    answers?: ShowAnswerDTO[];
}