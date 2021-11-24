import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedComponent } from './assigned/assigned.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UnassignedComponent } from './unassigned/unassigned.component';

const routes: Routes = [ 
  {path:'assign',component:AssignedComponent},
  {path:'unassign',component:UnassignedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
