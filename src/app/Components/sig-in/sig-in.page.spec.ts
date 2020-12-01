import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigInPage } from './sig-in.page';

describe('SigInPage', () => {
  let component: SigInPage;
  let fixture: ComponentFixture<SigInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
