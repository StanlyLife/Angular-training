import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <img src="/assets/images/basic-shield.png" />
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    <!-- <events-list></events-list> -->
  `,
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
