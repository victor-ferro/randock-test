import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GasStationModule } from './gas-station/gas-station.module';
import { DataModule } from './data/data.module';
import { UrlGoogleMapsService } from './url-google-maps/url-google-maps.service';

@Module({
  imports: [GasStationModule, DataModule],
  controllers: [AppController],
  providers: [AppService, UrlGoogleMapsService],
})
export class AppModule {}
