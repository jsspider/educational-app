import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation';
import { AppState } from './app.service';
import { AppRoutingModule } from './app-routing.module';

import '../styles/styles.scss';

// TODO(jsspider): get info how does this hmr work actually.
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    AppState
  ]
})
export class AppModule {}
