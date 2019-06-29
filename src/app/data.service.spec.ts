import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let dataService: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [dataService]
  });
  
  //dataService = TestBed.get(DataService);
});

  it('should be created', () => {
    const dataService: DataService = TestBed.get(DataService);
    expect(dataService).toBeTruthy();
  });



});
