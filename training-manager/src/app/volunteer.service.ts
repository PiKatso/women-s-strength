import { Injectable } from '@angular/core';
import { Volunteer } from './volunteer.model';
import { VOLUNTEERS } from './mock-volunteers';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class VolunteerService {

  volunteers: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.volunteers = database.list('volunteers');
  }

  getVolunteers() {
    return this.volunteers;
  }

  addVolunteer(newVolunteer: Volunteer) {
    this.volunteers.push(newVolunteer);
  }
}
