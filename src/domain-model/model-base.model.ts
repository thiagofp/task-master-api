import {Prop, Schema } from '@nestjs/mongoose';
@Schema()
export class ModelBase {
    @Prop()
    id: string;
}
