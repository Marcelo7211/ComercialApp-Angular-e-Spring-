import { TestBed } from '@angular/core/testing';

import { OportunidadeServiceService } from './oportunidade-service.service';

describe('OportunidadeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OportunidadeServiceService = TestBed.get(OportunidadeServiceService);
    expect(service).toBeTruthy();
  });
});
