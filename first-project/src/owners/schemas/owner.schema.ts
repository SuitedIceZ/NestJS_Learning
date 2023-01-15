import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type OwnerDocument = HydratedDocument<Owner>;

@Schema()
export class Owner {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  surname: string;

  @Prop()
  age: number;

}

export const OwnerSchema = SchemaFactory.createForClass(Owner);