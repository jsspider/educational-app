import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation';
import { TestComponent } from './test.component';
import { AppState } from './app.service';
import { AppRoutingModule } from './app-routing.module';

import '../styles/styles.scss';

// TODO(jsspider): get info how does this hmr work actually.
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NavigationComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AppState
  ]
})
export class AppModule {}
