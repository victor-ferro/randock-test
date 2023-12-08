import { Controller, Get, Query } from '@nestjs/common';
import { GasStationService } from './gas-station.service';
import { GetGasStationDto } from './dto/get-gas-station.dto';
import { QueryValidationPipe } from 'src/pipes/query-validation.pipe';

@Controller('gas-station')
export class GasStationController {
  constructor(private readonly gasStationService: GasStationService) {}

  @Get()
  async getGasStationsByPostalCodeAndFuel(
    @Query('fuelType', new QueryValidationPipe()) fuelType: number,
    @Query('postalCode', new QueryValidationPipe()) zip: string,
  ): Promise<GetGasStationDto[]> {
    return await this.gasStationService.getGasStationsByPostalCodeAndFuel(
      fuelType,
      zip,
    );
  }
}
