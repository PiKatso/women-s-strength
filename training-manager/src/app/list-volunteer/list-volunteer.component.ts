import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer.model';
import { Router } from '@angular/router';
import { VolunteerService } from '../volunteer.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list-volunteer',
  templateUrl: './list-volunteer.component.html',
  styleUrls: ['./list-volunteer.component.css'],
  providers: [ VolunteerService ]
})
export class ListVolunteerComponent implements OnInit {
  volunteers: FirebaseListObservable<any[]>;

  constructor(private router: Router, private volunteerService: VolunteerService) { }

  ngOnInit() {
     this.volunteers = this.volunteerService.getVolunteers();
  }

  goToVolunteer(clickedVolunteer){
    this.router.navigate(['volunteers', clickedVolunteer.$key]);
  }


}
