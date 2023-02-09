import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableWrapperComponent } from './table-wrapper/table-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    TableWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
