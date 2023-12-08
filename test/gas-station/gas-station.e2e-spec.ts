import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { GasStationController } from '../../src/gas-station/gas-station.controller';
import { GasStationService } from '../../src/gas-station/gas-station.service';
import * as request from 'supertest';
import { DataGasStationDAOMock } from '../../src/gas-station/dao/data-gas-station-dao.mock';
import { UrlGoogleMapsService } from '../../src/url-google-maps/url-google-maps.service';

describe('GasStationController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [GasStationController],
      providers: [
        GasStationService,
        { provide: 'GasStationDAO', useClass: DataGasStationDAOMock },
        UrlGoogleMapsService,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/gas-station (GET) should return gas stations', async () => {
    const response = await request(app.getHttpServer())
      .get('/gas-station')
      .query({
        postalCode: '46025',
        fuelType: 'diesel',
      });

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body).toStrictEqual([
      {
        nombre: 'PETROMAX',
        precio: '1.599',
        direccion: 'CL AVDA  EL ECUADOR (ESQ. GRAL.LLOR',
        urlGoogleMaps: 'https://www.google.com/maps?q=39.492972,-0.386722',
      },
      {
        nombre: 'CEPSA',
        precio: '1.649',
        direccion: 'AVENIDA HERMANOS MACHADO, 139',
        urlGoogleMaps: 'https://www.google.com/maps?q=39.497833,-0.383278',
      },
      {
        nombre: 'REPSOL',
        precio: '1.669',
        direccion: 'AVENIDA JUAN XXIII, 64',
        urlGoogleMaps: 'https://www.google.com/maps?q=39.458972,-0.372',
      },
    ]);
  });
});
