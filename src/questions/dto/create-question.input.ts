import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha, IsAlphanumeric, IsNotEmpty } from "class-validator";
import { QuestionType } from "../questions.entity";
import { createAnswerInput } from "src/answers/dto/create-answer.input";

@InputType()
export class createQuestionInput {
    @IsNotEmpty()
    @IsAlphanumeric()
    @Field()
    questionString: string;

    @Field(type => QuestionType)
    type: QuestionType;

    @Field(type => [createAnswerInput])
    answers: createAnswerInput[]

}