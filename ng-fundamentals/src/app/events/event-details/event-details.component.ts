import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './../shared/event.model';
import { EventService } from './../shared/events.service';

@Component({
  selector: '',
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding: 0 20px;
      }
      .event-image {
        height: 100px;
      }
    `,
  ],
})
export class EventDetailsComponent {
  public event: IEvent;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }
}
