import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGarlitoChatbotComponent } from './ngx-garlito-chatbot.component';

describe('NgxGarlitoChatbotComponent', () => {
  let component: NgxGarlitoChatbotComponent;
  let fixture: ComponentFixture<NgxGarlitoChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxGarlitoChatbotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxGarlitoChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
