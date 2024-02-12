import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ShowAnswerDTO {
    @Field()
    answerString: string;
}