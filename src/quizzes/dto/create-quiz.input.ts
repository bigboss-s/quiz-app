import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha, IsAlphanumeric, IsNotEmpty } from "class-validator";
import { createQuestionInput } from "src/questions/dto/create-question.input";

@InputType()
export class createQuizInput {
    @IsNotEmpty()
    @IsAlphanumeric()
    @Field()
    name: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    @Field()
    description: string;

    @Field(type => [createQuestionInput])
    questions: createQuestionInput[];
}