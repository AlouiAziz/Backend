// src/parking/parking.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Parking } from './parking.schema';

@Injectable()
export class ParkingService {
  constructor(@InjectModel(Parking.name) private parkingModel: Model<Parking>) {}

  // 1. Créer un parking
  async createParking(name: string, location: string, capacity: number): Promise<Parking> {
    const newParking = new this.parkingModel({ name, location, capacity });
    return newParking.save();
  }

  // 2. Lister tous les parkings
  async getAllParkings(): Promise<Parking[]> {
    return this.parkingModel.find().exec();
  }

  // 3. Récupérer un parking par ID
  async getParkingById(id: string): Promise<Parking> {
    const parking = await this.parkingModel.findById(id).exec();
    if (!parking) {
      throw new NotFoundException('Parking not found');
    }
    return parking;
  }

  // 4. Supprimer un parking
  async deleteParking(id: string): Promise<Parking> {
    const parking = await this.parkingModel.findByIdAndDelete(id).exec();
    if (!parking) {
      throw new NotFoundException('Parking not found');
    }
    return parking;
  }
}
