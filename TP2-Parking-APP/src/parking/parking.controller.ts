// src/parking/parking.controller.ts
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ParkingService } from './parking.service';

@Controller('parkings')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  // POST /parkings - Créer un parking
  @Post()
  async createParking(@Body() body: { name: string; location: string; capacity: number }) {
    return this.parkingService.createParking(body.name, body.location, body.capacity);
  }

  // GET /parkings - Lister tous les parkings
  @Get()
  async getAllParkings() {
    return this.parkingService.getAllParkings();
  }

  // GET /parkings/:id - Récupérer les détails d'un parking
  @Get(':id')
  async getParkingById(@Param('id') id: string) {
    return this.parkingService.getParkingById(id);
  }

  // DELETE /parkings/:id - Supprimer un parking
  @Delete(':id')
  async deleteParking(@Param('id') id: string) {
    return this.parkingService.deleteParking(id);
  }
}
