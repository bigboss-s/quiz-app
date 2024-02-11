import { Field, InputType } from "@nestjs/graphql";
import { IsAlphanumeric, IsNotEmpty } from "class-validator";

@InputType()
export class createAnswerInput {
    @IsNotEmpty()
    @IsAlphanumeric()
    @Field()
    answerString: string;

    @Field({nullable: true})
    isCorrect?: boolean;
}