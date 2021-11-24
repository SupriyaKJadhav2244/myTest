import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DisplaymapComponent } from './displaymap/displaymap.component';
import { AssignedComponent } from './assigned/assigned.component';
import { UnassignedComponent } from './unassigned/unassigned.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LinkslComponent } from './linksl/linksl.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DisplaymapComponent,
    AssignedComponent,
    UnassignedComponent,
    NavigationComponent,
    LinkslComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
