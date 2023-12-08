import { Injectable } from '@nestjs/common';
import { GasStationDto } from '../dto/gas-station.dto';
import { GasStationDAO } from '../interface/gas-station-dao.interface';
import { DataService } from '../../data/data.service';
import { EmptyResponseException } from '../../errors/empty-response.exception';
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

    const stations = response.filter((station) => station['C.P.'] === zip);
    if (stations.length === 0) {
      throw new EmptyResponseException(zip);
    }

    return stations;
  }
}
