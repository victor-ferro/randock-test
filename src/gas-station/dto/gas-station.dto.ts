import { IsString } from 'class-validator';

export class GasStationDto {
  @IsString()
  'C.P.': string;

  @IsString()
  Dirección: string;

  @IsString()
  Horario: string;

  @IsString()
  Latitud: string;

  @IsString()
  Localidad: string;

  @IsString()
  'Longitud (WGS84)': string;

  @IsString()
  Margen: string;

  @IsString()
  Municipio: string;

  @IsString()
  PrecioProducto: string;

  @IsString()
  Provincia: string;

  @IsString()
  Remisión: string;

  @IsString()
  Rótulo: string;

  @IsString()
  'Tipo Venta': string;

  @IsString()
  IDEESS: string;

  @IsString()
  IDMunicipio: string;

  @IsString()
  IDProvincia: string;

  @IsString()
  IDCCAA: string;
}
