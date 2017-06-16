import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ListVolunteerComponent } from './list-volunteer/list-volunteer.component';
import { AdminComponent } from './admin/admin.component';
import { VolunteerDetailComponent } from './volunteer-detail/volunteer-detail.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ListVolunteerComponent,
    AdminComponent,
    VolunteerDetailComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
