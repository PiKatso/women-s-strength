import { Injectable } from '@angular/core';
import { Volunteer } from './volunteer.model';
import { VOLUNTEERS } from './mock-volunteers';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class VolunteerService {

  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.volunteers = database.list('volunteers');
  }

  getVolunteers() {
    return VOLUNTEERS;
  }
}
