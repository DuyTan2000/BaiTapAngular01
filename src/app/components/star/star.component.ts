import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  rating: number = 0;

  constructor() { }

  ngOnInit() {
  }

  rate() {
    console.log("rating", );
    
  }

}
