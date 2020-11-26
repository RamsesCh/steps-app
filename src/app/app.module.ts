import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { SteperComponent } from './component/steper/steper.component';
import { Step1Component } from './component/step1/step1.component';
import { Step2Component } from './component/step2/step2.component';
import { Step3Component } from './component/step3/step3.component';
import { NotAvaibleComponent } from './component/not-avaible/not-avaible.component';
import { FinishStepComponent } from './component/finish-step/finish-step.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SteperComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    NotAvaibleComponent,
    FinishStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
