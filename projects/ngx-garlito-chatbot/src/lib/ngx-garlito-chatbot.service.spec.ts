import { TestBed } from '@angular/core/testing';

import { NgxGarlitoChatbotService } from './ngx-garlito-chatbot.service';

describe('NgxGarlitoChatbotService', () => {
  let service: NgxGarlitoChatbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGarlitoChatbotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
