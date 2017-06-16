import { Component, OnInit, Input } from '@angular/core';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.component.html',
  styleUrls: ['./edit-volunteer.component.css'],
  providers: [ VolunteerService ]
})
export class EditVolunteerComponent implements OnInit {
  @Input() selectedVolunteer;

  constructor(private volunteerService: VolunteerService) { }

  ngOnInit() {
  }

  begUpdateVolunteer(volunteerToUpdate){
    this.volunteerService.updateVolunteer(volunteerToUpdate);
  }

  begVolunteerDelete(volunteerDeleting){
    if(confirm("Are you sure?!")) {
      this.volunteerService.deleteVolunteer(volunteerDeleting);
    }
  }

}
