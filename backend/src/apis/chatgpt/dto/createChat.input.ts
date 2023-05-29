import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class createChatInput {

    @Field(() => String)
    title: string;

    @Field(() => String)
    ask: string;
    
  }