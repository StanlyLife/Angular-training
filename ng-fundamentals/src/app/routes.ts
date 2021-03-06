import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventListComponent,
  EventListResolver,
  EventRouteActivator,
} from './events/index';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  } /* Allows user to go to route if EventRouteActivator is true */,
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  /* when a path starts with user, load user module from this path */
];
