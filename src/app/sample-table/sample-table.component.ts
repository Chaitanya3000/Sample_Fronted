import { Component, OnInit } from '@angular/core';
import { SampleTableService } from '../sample-table.service';

@Component({
  selector: 'app-sample-table',
  templateUrl: './sample-table.component.html',
  styleUrls: ['./sample-table.component.css']
})
export class SampleTableComponent implements OnInit {
  data: any[] = [];
  showData: boolean = false;

  constructor(private sampleTableService: SampleTableService) { }

  ngOnInit(): void {
    // Initially, do not load data
  }

  loadData(): void {
    this.sampleTableService.read().subscribe(response => {
      console.log('Response from Read API:', response);
      this.data = response.Result;
      this.showData = true;
    }, error => {
      console.error('Error fetching data', error);
    });
  }
}
