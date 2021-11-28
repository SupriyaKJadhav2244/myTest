import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { DisplaymapComponent } from './displaymap/displaymap.component';
import { AssignedComponent } from './assigned/assigned.component';
import { UnassignedComponent } from './unassigned/unassigned.component';
import { NavigationComponent } from './navigation/navigation.component'; 
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'; 

@NgModule({
  declarations: [
    AppComponent, 
    DisplaymapComponent,
    AssignedComponent,
    UnassignedComponent,
    NavigationComponent, 
    PagenotfoundComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
