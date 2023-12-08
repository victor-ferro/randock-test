import { Test, TestingModule } from '@nestjs/testing';
import { UrlGoogleMapsService } from './url-google-maps.service';

describe('UrlGoogleMapsService', () => {
  let service: UrlGoogleMapsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlGoogleMapsService],
    }).compile();

    service = module.get<UrlGoogleMapsService>(UrlGoogleMapsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
