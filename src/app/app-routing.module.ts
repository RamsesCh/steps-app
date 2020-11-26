import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './component/principal/principal.component';
import { NotAvaibleComponent } from './component/not-avaible/not-avaible.component';
import { FinishStepComponent } from './component/finish-step/finish-step.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'finish', component: FinishStepComponent},
  {path: 'not-avaible', component: NotAvaibleComponent},
  {path: '**', component: NotAvaibleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
