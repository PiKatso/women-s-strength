import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { ListVolunteerComponent } from './list-volunteer/list-volunteer.component';
import { AdminComponent } from './admin/admin.component';
import { VolunteerDetailComponent } from './volunteer-detail/volunteer-detail.component';
import { AboutComponent } from './about/about.component';
import { EditVolunteerComponent } from './edit-volunteer/edit-volunteer.component';
import { PipeSortTrainedPipe } from './pipe-sort-trained.pipe';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ListVolunteerComponent,
    AdminComponent,
    VolunteerDetailComponent,
    AboutComponent,
    EditVolunteerComponent,
    PipeSortTrainedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
