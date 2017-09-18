import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomComboComponent } from './custom-combo/custom-combo.component';
import {FakedataService} from './services/fakedata.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomComboComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FakedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
