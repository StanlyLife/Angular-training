import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes';

import { RouterModule } from '@angular/router';
import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';

import { UserModule } from './user/user.module';

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventListComponent,
  EventListResolver,
  EventRouteActivator,
  EventService,
  EventThumbnailComponent,
} from './events/index';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(Component: CreateEventComponent) {
  if (Component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  }
}
