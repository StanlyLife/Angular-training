import { ToastrService } from './../common/toastr.service';
import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/events.service';
import { ActivatedRoute } from '@angular/router';

declare let toastr;

@Component({
  selector: 'events-list',
  template: `<div>
    <h1>Upcoming angular events</h1>
    <hr />
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail
          [event]="event"
          (eventClick)="handleEventClicked($event)"
          (click)="handleThumbnailClick(event.name)"
        ></event-thumbnail>
      </div>
    </div>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">
      parse from child
    </button>
  </div>`,
})
export class EventListComponent implements OnInit {
  events: any[];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  handleThumbnailClick(eventName) {
    this.toastr.info(`event: ${eventName}`);
  }

  handleEventClicked(data) {
    console.log(`recieved: ${data}`);
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
    // this.eventService.getEvents().subscribe((events) => {
    //   this.events = events;
    // });
  }
}
