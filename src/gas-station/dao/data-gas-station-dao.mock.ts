import * as fs from 'fs';
import { join } from 'path';
import { GasStationDAO } from '../interface/gas-station-dao.interface';
import { GasStationDto } from '../dto/gas-station.dto';

export class DataGasStationDAOMock implements GasStationDAO {
  private readonly dataDiesel: GasStationDto[];
  private readonly dataGasolina: GasStationDto[];
  constructor() {
    const filePathDiesel = join(
      __dirname,
      '..',
      '..',
      '..',
      'mock-data',
      'DB_diesel.json',
    );

    this.dataDiesel = JSON.parse(fs.readFileSync(filePathDiesel, 'utf8'));
    const filePathGasolina = join(
      __dirname,
      '..',
      '..',
      '..',
      'mock-data',
      'DB_gasolina.json',
    );

    this.dataGasolina = JSON.parse(fs.readFileSync(filePathGasolina, 'utf8'));
  }

  async filterByCPandFuelType(
    fuelType: number,
    zip?: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _province?: number,
  ): Promise<GasStationDto[]> {
    const stations = fuelType <= 3 ? this.dataGasolina : this.dataDiesel;
    if (zip) {
      return Promise.resolve(
        stations.filter((station) => station['C.P.'] === zip),
      );
    } else {
      return Promise.resolve(stations);
    }
  }
}
