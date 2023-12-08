import { Test, TestingModule } from '@nestjs/testing';
import { GasStationController } from './gas-station.controller';
import { GasStationService } from './gas-station.service';
import { DataGasStationDAOMock } from './dao/data-gas-station-dao.mock';
import { UrlGoogleMapsService } from '../url-google-maps/url-google-maps.service';

describe('GasStationController', () => {
  let controller: GasStationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GasStationController],
      providers: [
        GasStationService,
        { provide: 'GasStationDAO', useClass: DataGasStationDAOMock },
        UrlGoogleMapsService,
      ],
    }).compile();

    controller = module.get<GasStationController>(GasStationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
