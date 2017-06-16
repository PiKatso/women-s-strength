import { Injectable } from '@angular/core';
import { Volunteer } from './volunteer.model';
import { VOLUNTEERS } from './mock-volunteers';

@Injectable()
export class VolunteerService {

  constructor() { }

  getVolunteers() {
    return VOLUNTEERS;
  }
}
