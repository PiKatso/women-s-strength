import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer.model';
import { Router } from '@angular/router';
import { VolunteerService } from '../volunteer.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ VolunteerService ]
})
export class AdminComponent implements OnInit {

  constructor(private volunteerService: VolunteerService) { }

  ngOnInit() {
  }

  submitForm(name: string, age: number, sex: string, background: string, bio: string, trained: boolean){
    var newVolunteer: Volunteer = new Volunteer(name, age, sex, background, bio, trained);
    console.log(newVolunteer);
  }

}
