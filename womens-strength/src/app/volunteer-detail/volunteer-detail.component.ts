import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { Volunteer } from '../volunteer.model';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-volunteer-detail',
  templateUrl: './volunteer-detail.component.html',
  styleUrls: ['./volunteer-detail.component.css'],
  providers: [ VolunteerService ]
})
export class VolunteerDetailComponent implements OnInit {
volunteerId: string;
volunteerDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private volunteerService: VolunteerService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.volunteerId = urlParameters['id'];
    });
    this.volunteerDisplay = this.volunteerService.getByVolunteerId(this.volunteerId);
  }

}
