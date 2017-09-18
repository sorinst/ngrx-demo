import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomComboComponent } from './custom-combo/custom-combo.component';
import {FakedataService} from './services/fakedata.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppState, INITIAL_APP_STATE } from './store/app.state';
import { mainStoreReducer } from './reducers/app.reducers';
import { ComboEffectsService } from './effects/app.effects';



@NgModule({
  declarations: [
    AppComponent,
    CustomComboComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(mainStoreReducer),
    EffectsModule.forRoot([ComboEffectsService])
  ],
  providers: [FakedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
