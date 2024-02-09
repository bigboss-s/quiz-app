import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha, IsAlphanumeric, IsNotEmpty } from "class-validator";

@InputType()
export class createQuizInput {
    @IsNotEmpty()
    @IsAlphanumeric()
    @Field()
    name: string;
}