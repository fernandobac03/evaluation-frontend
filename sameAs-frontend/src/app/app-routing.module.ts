import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppStartComponent} from './app-start/app-start.component';
import { AppEvaluationComponent} from './app-evaluation/app-evaluation.component';
import { AppFinalComponent} from './app-final/app-final.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'iniciar',
    component: AppStartComponent
  },
  {
    path: 'evaluar',
    component: AppEvaluationComponent
  },
  {
    path: 'end',
    component: AppFinalComponent
  },
  {
    path: '',
    redirectTo: 'iniciar',
    pathMatch: 'full'
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
