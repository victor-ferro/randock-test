import { Controller, Get, Query } from '@nestjs/common';
import { GasStationService } from './gas-station.service';
import { GetGasStationDto } from './dto/get-gas-station.dto';

@Controller('gas-station')
export class GasStationController {
  constructor(private readonly gasStationService: GasStationService) {}

  @Get()
  async getGasStationsByPostalCodeAndFuel(
    @Query('fuelType') fuelType: number,
    @Query('postalCode') zip: string,
  ): Promise<GetGasStationDto[]> {
    return await this.gasStationService.getGasStationsByPostalCodeAndFuel(
      fuelType,
      zip,
    );
  }

  // @Get('all')
  // async getGasStationsByPostalCodeAndFuel(
  //   @Query('fuelType', new QueryValidationPipe()) fuelType: number,
  //   @Query('cp', new QueryValidationPipe()) cp: string,
  //   // @Query('province', new QueryValidationPipe()) province?: number,
  // ): Promise<GetGasStationsDto[]> {
  //   return await this.gasStationService.getGasStationsByPostalCodeAndFuel(
  //     fuelType,
  //     cp,
  //   );
  // }
}
