import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DeskNavComponent } from './header/desk-nav/desk-nav.component';
import { MobNavComponent } from './header/mob-nav/mob-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeskNavComponent,
    MobNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
