// src/reservation/reservation.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation } from './reservation.schema';

@Injectable()
export class ReservationService {
  constructor(@InjectModel(Reservation.name) private reservationModel: Model<Reservation>) {}

  // 1. Prendre une réservation
  async createReservation(parkingId: string, customerName: string, date: Date): Promise<Reservation> {
    const newReservation = new this.reservationModel({ parking: parkingId, customerName, date });
    return newReservation.save();
  }

  // 2. Lister toutes les réservations pour un parking
  async getAllReservations(parkingId: string): Promise<Reservation[]> {
    return this.reservationModel.find({ parking: parkingId }).exec();
  }

  // 3. Récupérer une réservation par ID
  async getReservationById(parkingId: string, reservationId: string): Promise<Reservation> {
    const reservation = await this.reservationModel.findOne({ _id: reservationId, parking: parkingId }).exec();
    if (!reservation) {
      throw new NotFoundException('Reservation not found');
    }
    return reservation;
  }

  // 4. Supprimer une réservation
  async deleteReservation(parkingId: string, reservationId: string): Promise<Reservation> {
    const reservation = await this.reservationModel.findOneAndDelete({ _id: reservationId, parking: parkingId }).exec();
    if (!reservation) {
      throw new NotFoundException('Reservation not found');
    }
    return reservation;
  }
}
