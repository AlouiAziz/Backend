import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Parking extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    location: string;

    @Prop({ required: true })
    capacity: number;
}

export const ParkingSchema = SchemaFactory.createForClass(Parking);
