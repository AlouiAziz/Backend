import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParkingModule } from './parking/parking.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Parking'), 
    ParkingModule,
    ReservationModule,
  ],
})
export class AppModule {}
