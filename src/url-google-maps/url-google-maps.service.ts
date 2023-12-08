import { Injectable } from '@nestjs/common';
import { GasStationDto } from '../gas-station/dto/gas-station.dto';

@Injectable()
export class UrlGoogleMapsService {
  constructor() {}

  buildGoogleMapsUrl(gasStation: GasStationDto): string {
    return `https://www.google.com/maps?q=${encodeURI(gasStation.Dirección)}`;
  }

  buildGoogleMapsUrlByCoord(gasStation: GasStationDto): string {
    const lat = parseFloat(gasStation.Latitud.replace(',', '.'));
    const lon = parseFloat(gasStation['Longitud (WGS84)'].replace(',', '.'));
    if (!isNaN(lat) && !isNaN(lon)) {
      return `https://www.google.com/maps?q=${lat},${lon}`;
    } else {
      return this.buildGoogleMapsUrl(gasStation);
    }
  }
}
