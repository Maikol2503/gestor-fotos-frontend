import { TestBed } from '@angular/core/testing';

import { ArchivoServicesService } from './archivo-services.service';

describe('ArchivoServicesService', () => {
  let service: ArchivoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
