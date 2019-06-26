import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppService } from './app.service';
import { AppStartComponent } from './app-start/app-start.component';
import { AppEvaluationComponent } from './app-evaluation/app-evaluation.component';
import { AppIndividualComponent } from './app-individual/app-individual.component';
import { AppFinalComponent } from './app-final/app-final.component';

@NgModule({
  declarations: [
    AppComponent,
    AppStartComponent,
    AppEvaluationComponent,
    AppIndividualComponent,
    AppFinalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
