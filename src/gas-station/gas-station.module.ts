import { Module } from '@nestjs/common';
import { GasStationService } from './gas-station.service';
import { GasStationController } from './gas-station.controller';
import { DataModule } from 'src/data/data.module';

@Module({
  imports: [DataModule],
  controllers: [GasStationController],
  providers: [GasStationService],
})
export class GasStationModule {}
