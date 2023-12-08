import { Test, TestingModule } from '@nestjs/testing';
import { GasStationService } from './gas-station.service';
import { DataGasStationDAOMock } from './dao/data-gas-station-dao.mock';
import { UrlGoogleMapsService } from '../url-google-maps/url-google-maps.service';

describe('GasStationService', () => {
  let service: GasStationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GasStationService,
        { provide: 'GasStationDAO', useClass: DataGasStationDAOMock },
        UrlGoogleMapsService,
      ],
    }).compile();

    service = module.get<GasStationService>(GasStationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
