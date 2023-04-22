import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ModelBase } from './model-base.model';

export type TaskDocument = Author & Document;

@Schema()
export class Author extends ModelBase {
    @Prop()
    name: string;
}
