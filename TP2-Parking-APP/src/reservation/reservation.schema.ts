import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';
import { Parking } from 'src/parking/parking.schema';

@Schema()
export class Reservation extends Document {
  @Prop({ required: true, type: Types.ObjectId, ref: 'Parking' })
  parking: Parking;

  @Prop({ required: true })
  customerName: string;

  @Prop({ required: true })
  date: Date;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
