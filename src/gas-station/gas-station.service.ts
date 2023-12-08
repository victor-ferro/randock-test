import { Inject, Injectable } from '@nestjs/common';
import { GetGasStationDto } from './dto/get-gas-station.dto';
import { GasStationDAO } from './interface/gas-station-dao.interface';
import { GasStationDto } from './dto/gas-station.dto';

@Injectable()
export class GasStationService {
  constructor(
    @Inject('GasStationDAO')
    private readonly gasStationDAO: GasStationDAO,
  ) {}
  async getGasStationsByPostalCodeAndFuel(
    fuelType: number,
    zip: string,
  ): Promise<GetGasStationDto[]> {
    const provinceCode = parseInt(zip.substring(0, 2));
    const response: GasStationDto[] =
      await this.gasStationDAO.filterByCPandFuelType(
        fuelType,
        zip,
        provinceCode,
      );
    const gasStations = response.map((station) => ({
      nombre: station.Rótulo,
      precio: station.PrecioProducto.replace(',', '.'),
      direccion: station.Dirección,
      urlGoogleMaps: '',
    }));
    return gasStations;
  }
}
