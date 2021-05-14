import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lazy-modules-overlay';
  loading: boolean;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.loading = true;
        console.log(this.loading);
      } else if (event instanceof RouteConfigLoadEnd) {
        setTimeout(() => {
          this.loading = false;
          console.log(this.loading);
        }, 5000);
      } 
    });
  }
}
