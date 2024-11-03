// src/reservation/reservation.controller.ts
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ReservationService } from './reservation.service';

@Controller('parkings/:parkingId/reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  // POST /parkings/:parkingId/reservations - Prendre une réservation
  @Post()
  async createReservation(
    @Param('parkingId') parkingId: string,
    @Body() body: { customerName: string; date: Date },
  ) {
    return this.reservationService.createReservation(parkingId, body.customerName, body.date);
  }

  // GET /parkings/:parkingId/reservations - Lister toutes les réservations
  @Get()
  async getAllReservations(@Param('parkingId') parkingId: string) {
    return this.reservationService.getAllReservations(parkingId);
  }

  // GET /parkings/:parkingId/reservations/:idReservation - Récupérer les détails d'une réservation
  @Get(':idReservation')
  async getReservationById(@Param('parkingId') parkingId: string, @Param('idReservation') reservationId: string) {
    return this.reservationService.getReservationById(parkingId, reservationId);
  }

  // DELETE /parkings/:parkingId/reservations/:idReservation - Supprimer une réservation
  @Delete(':idReservation')
  async deleteReservation(@Param('parkingId') parkingId: string, @Param('idReservation') reservationId: string) {
    return this.reservationService.deleteReservation(parkingId, reservationId);
  }
}
