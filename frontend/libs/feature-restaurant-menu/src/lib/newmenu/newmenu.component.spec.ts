import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatSelectModule } from "@angular/material";
import { NewmenuComponent } from "./newmenu.component";

describe("NewmenuComponent", () => {
  let component: NewmenuComponent;
  let fixture: ComponentFixture<NewmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewmenuComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
});
