import { GasStationDto } from '../dto/gas-station.dto';

export interface GasStationDAO {
  filterByCPandFuelType(
    fuelType: number,
    cp: string,
    province: number,
  ): Promise<GasStationDto[]>;
}
