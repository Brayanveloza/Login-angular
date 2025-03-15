import { TestBed } from '@angular/core/testing';

import { GestorCookiesService } from './gestor-cookies.service';

describe('GestorCookiesService', () => {
  let service: GestorCookiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorCookiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
