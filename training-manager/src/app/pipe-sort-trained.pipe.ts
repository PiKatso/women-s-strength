import { Pipe, PipeTransform } from '@angular/core';
import { Volunteer } from './volunteer.model';

@Pipe({
  name: 'pipeSortTrained'
})

export class PipeSortTrainedPipe implements PipeTransform {

  transform(input: Volunteer[], trainingStatus: string){

    let output: Volunteer[] = [];

    if (trainingStatus == "completed") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].trained == "Completed") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (trainingStatus == "incomplete") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].trained == "Incomplete") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
