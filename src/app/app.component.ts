import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeographicsService } from './shared/_services/geographics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(readonly geographicsService: GeographicsService) { }
 
  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
