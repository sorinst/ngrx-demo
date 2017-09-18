import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomComboComponent } from './custom-combo/custom-combo.component';
import {FakedataService} from './services/fakedata.service';
import { StoreModule } from '@ngrx/store';
import {AppState, INITIAL_APP_STATE} from './store/app.state';
import { mainStoreReducer } from "./reducers/app.reducers";



@NgModule({
  declarations: [
    AppComponent,
    CustomComboComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(mainStoreReducer)
  ],
  providers: [FakedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
