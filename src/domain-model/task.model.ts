import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {ModelBase} from "./model-base.model";
import {Author} from "./author.model";

export type TaskDocument = Task & Document;

@Schema()
export class Task extends ModelBase{
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    done: boolean;

    @Prop()
    author: Author
}
