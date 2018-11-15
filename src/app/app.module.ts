import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InfoPageComponent } from './info-page/info-page.component';

const routes: Routes = [
  {
    path: 'info',
    component: InfoPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    InfoPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
