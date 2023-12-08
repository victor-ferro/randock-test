import { IsString, IsNumber, IsUrl } from 'class-validator';

export class GetGasStationDto {
  @IsString()
  nombre: string;

  @IsNumber()
  precio: string;

  @IsString()
  direccion: string;

  @IsUrl()
  urlGoogleMaps: string;
}
