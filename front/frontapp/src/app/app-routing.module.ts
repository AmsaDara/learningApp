import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarEventComponent } from './layout/calendar-event/calendar-event.component';
import { CoursesComponent } from './layout/courses/courses.component';
import { HomeComponent } from './layout/home/home.component';
import { NavComponent } from './layout/nav/nav.component'
import { NewsComponent } from './layout/news/news.component';
import { ParticipantsComponent } from './layout/participants/participants.component';
import { ProgressionBarComponent } from './layout/progression-bar/progression-bar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'participants',
        component: ParticipantsComponent
      },
      {
        path: 'progress',
        component: ProgressionBarComponent
      },
      
    ]
  },
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'annonces',
        component: NewsComponent
      }
    ]
  },
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'calendarevent',
        component: CalendarEventComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

