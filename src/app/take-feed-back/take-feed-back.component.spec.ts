import { async, ComponentFixture, TestBed } from '@angular/core/testing';   
import { TakeFeedBackComponent } from './take-feed-back.component';

describe('TakeFeedBackComponent', () => {
  let component: TakeFeedBackComponent;
  let fixture: ComponentFixture<TakeFeedBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeFeedBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
