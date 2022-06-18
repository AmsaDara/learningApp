import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gards/auth.guard';
import { CalendarEventComponent } from './layout/calendar-event/calendar-event.component';
import { CoursesComponent } from './layout/courses/courses.component';
import { HomeComponent } from './layout/home/home.component';
import { NavComponent } from './layout/nav/nav.component'
import { NewsComponent } from './layout/news/news.component';
import { ParticipantsComponent } from './layout/participants/participants.component';
import { ProfilComponent } from './layout/profil/profil.component';
import { ProgressionBarComponent } from './layout/progression-bar/progression-bar.component';
import { RegisterComponent } from './student/register/register.component';
import { SigninComponent } from './student/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    //pathMatch: 'full',
    //redirectTo: 'home'
    component: SigninComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'courses',
        component: CoursesComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'participants',
        component: ParticipantsComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'progress',
        component: ProgressionBarComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'profil',
        component: ProfilComponent,
        canActivate:[AuthGuard]
      },
      
    ]
  },
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'annonces',
        component: NewsComponent,
        canActivate:[AuthGuard]
      }
    ]
  },
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'calendarevent',
        component: CalendarEventComponent,
        canActivate:[AuthGuard]
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

