import { Field, ObjectType } from "@nestjs/graphql";
import { ShowQuestionDTO } from "src/questions/dto/show-question.type";

@ObjectType()
export class ShowQuizDTO{
    
    @Field()
    name: string;

    @Field()
    description: string;

    @Field(type => [ShowQuestionDTO])
    questions: ShowQuestionDTO[];
}