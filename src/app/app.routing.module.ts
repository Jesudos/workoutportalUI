import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {WorkoutlistComponent} from './workoutlist/workoutlist.component';
import {WorkoutComponent} from './workout/workout.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'workoutList', component: WorkoutlistComponent},
    { path: 'workout', component: WorkoutComponent}
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
export class AppRoute{}