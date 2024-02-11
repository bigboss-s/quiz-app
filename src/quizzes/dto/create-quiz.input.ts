import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha, IsAlphanumeric, IsNotEmpty } from "class-validator";
import { createQuestionInput } from "src/questions/dto/create-question.input";

@InputType()
export class createQuizInput {
    @IsNotEmpty()
    @Field()
    name: string;

    @IsNotEmpty()
    @Field()
    description: string;

    @Field(type => [createQuestionInput])
    questions: createQuestionInput[];
}