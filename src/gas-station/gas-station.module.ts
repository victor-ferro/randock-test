import { Module } from '@nestjs/common';
import { GasStationService } from './gas-station.service';
import { GasStationController } from './gas-station.controller';
import { DataModule } from 'src/data/data.module';
import { DataGasStationDAO } from './dao/data-gas-station-dao.service';

@Module({
  imports: [DataModule],
  controllers: [GasStationController],
  providers: [
    GasStationService,
    { provide: 'GasStationDAO', useClass: DataGasStationDAO },
  ],
})
export class GasStationModule {}
