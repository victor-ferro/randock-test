import { Injectable } from '@nestjs/common';
import { DataService } from 'src/data/data.service';

@Injectable()
export class GasStationService {
  constructor(private readonly dataService: DataService) {}
  async getGasStationsByPostalCodeAndFuel(fuelType: number, zip: string) {
    const stations = await this.dataService.filterByProvinceAndFuelType(
      fuelType,
      parseInt(zip.substring(0, 2)),
    );
    return stations.map((station) => ({
      nombre: station.Rótulo,
      precio: station.PrecioProducto.replace(',', '.'),
      direccion: station.Dirección,
      urlGoogleMaps: `https://www.google.com/maps?`,
    }));
  }
}
