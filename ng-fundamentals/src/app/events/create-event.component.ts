import { FormControl, Validators } from '@angular/forms';
import { EventService } from './shared/events.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { restrictedWords } from './shared/index';

@Component({
  templateUrl: 'create-event.component.html',
  styles: [
    `
      em {
        float: right;
        padding-left: 20px;
        color: #4ca5c;
      }

      .error input {
        background-color: indianred;
        border: 1px solid #666;
      }
    `,
  ],
})
export class CreateEventComponent {
  newEvent;
  event;
  name;
  isDirty: boolean = true;
  constructor(private router: Router, private eventService: EventService) {}

  saveEvent(formValues) {
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  ngOnInit() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      restrictedWords(['test', 'stian']),
    ]);
    // this.event = {
    //   name: 'pre filled form, banana in a box',
    //   date: '16/11/1997',
    //   time: '10am',
    //   price: 899,
    //   location: {
    //     adress: 'test',
    //     city: 'city',
    //     country: 'Norway',
    //   },
    //   onlineUrl: '',
    //   imageUrl: '',
    // };
  }
}
