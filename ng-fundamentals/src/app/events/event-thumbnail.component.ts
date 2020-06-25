import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{ event?.name }}</h2>
      <div>Date: {{ event?.date }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: {{ event.price }}</div>
      <div>
        <span>Location: {{ event.location.adress }}</span>
        <span>&nbsp;</span>
        <span>{{ event.location.city }} {{ event.location.country }}</span>
      </div>
      <button class="btn btn-primary" (click)="handleClickMe()">
        Click me
      </button>
    </div>
  `,
  styles: [
    `
      .thumbnail {
        border-radius: 0;
        border: none;
        color: snow;
        background-color: #424b55;
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: any;

  @Output() eventClick = new EventEmitter();

  someProperty: any = 'some value';

  handleClickMe(): void {
    this.eventClick.emit(this.event.name);
  }

  logFoo(): void {
    console.log('foo');
  }
}
