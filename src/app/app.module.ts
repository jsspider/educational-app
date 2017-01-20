import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation';
import { AppRoutingModule } from './app-routing.module';

import '../styles/styles.scss';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: []
})

export class AppModule {}
