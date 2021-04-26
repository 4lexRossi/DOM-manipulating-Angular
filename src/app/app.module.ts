import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlosIfDirective } from './alos-if.directive';
import { alosForDirective } from './alos-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    AlosIfDirective,
    alosForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
