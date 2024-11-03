import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Parking, ParkingSchema } from './parking.schema';
import { ParkingService } from './parking.service';
import { ParkingController } from './parking.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Parking.name, schema: ParkingSchema }])],
  controllers: [ParkingController],
  providers: [ParkingService],
})
export class ParkingModule {}
