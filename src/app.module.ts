import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GasStationModule } from './gas-station/gas-station.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [GasStationModule, DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
