import { Injectable } from '@nestjs/common';
import { GasStationDto } from '../dto/gas-station.dto';
import { GasStationDAO } from '../interface/gas-station-dao.interface';
import { DataService } from 'src/data/data.service';
@Injectable()
export class DataGasStationDAO implements GasStationDAO {
  constructor(private readonly dataService: DataService) {}

  async filterByCPandFuelType(
    fuelType: number,
    zip: string,
    province: number,
  ): Promise<GasStationDto[]> {
    const response = await this.dataService.filterByProvinceAndFuelType(
      fuelType,
      province,
    );
    if (zip) {
      return response.filter((station) => station['C.P.'] === zip);
    } else {
      return response;
    }
  }
}
