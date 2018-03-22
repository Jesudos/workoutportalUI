import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AppRoute} from './/app.routing.module';
import { AlertService } from './alert.service';
import { BaseurlService } from './baseurl.service';
import { DataServiceService } from './data-service.service';
import { UserDataService } from './user-data.service';
import {RegisterService} from './register.service';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutlistComponent } from './workoutlist/workoutlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    WorkoutComponent,
    WorkoutlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoute,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    AlertService,
    BaseurlService,
    DataServiceService,
    UserDataService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
