import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeographicsService } from './shared/_services/geographics.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(readonly geographicsService: GeographicsService) { }
 
  ngOnInit(): void {
    this.populateCountries();
  }
  populateCountries() {
    this.geographicsService.getAllCountries().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
  title = 'geographics';

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
