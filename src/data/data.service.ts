import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GasStationDto } from 'src/gas-station/dto/gas-station.dto';

@Injectable()
export class DataService {
  private readonly data: GasStationDto[];
  private readonly baseUrl: string;
  constructor() {
    this.baseUrl =
      'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres';
  }

  async filterByProvinceAndFuelType(
    fuelType: number,
    idProvincia: number,
  ): Promise<GasStationDto[]> {
    const fuelNumberType = fuelType;
    const url = `${this.baseUrl}/FiltroProvinciaProducto/${idProvincia}/${fuelNumberType}`;
    const response = await axios.get(url);
    return response.data.ListaEESSPrecio;
  }
}
