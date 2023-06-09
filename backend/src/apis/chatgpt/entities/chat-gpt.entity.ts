import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/apis/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
@ObjectType()
export class ChatGPT {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    title: string;

    @Column()
    @Field(() => String)
    ask: string;


    @Column({length: 600})
    @Field(() => String)
    answer: string;

    @Column({default: 0})
    @Field(() => Number)
    score: number;

    @ManyToOne(() => User)
    @Field(() => User)
    user: User;

    @CreateDateColumn()
    @Field(() => Date)
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @UpdateDateColumn()
    @Field(() => Date)
    updatedAt: Date;

    
}