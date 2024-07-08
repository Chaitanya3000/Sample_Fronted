import { Component } from '@angular/core';
import { SampleTableService } from '../sample-table.service';

@Component({
  selector: 'app-sample-input',
  templateUrl: './sample-input.component.html',
  styleUrls: ['./sample-input.component.css']
})
export class SampleInputComponent {
  name: string = '';
  age: number  = 0;
  salary: string = '';

  constructor(private sampleTableService: SampleTableService) { }

  onSubmit(): void {
    const details = { Name: this.name, Age: this.age, Salary: this.salary };
    this.sampleTableService.insert(details).subscribe(response => {
      console.log('Insert success', response);
    }, error => {
      console.error('Error inserting data', error);
    });
  }
}
