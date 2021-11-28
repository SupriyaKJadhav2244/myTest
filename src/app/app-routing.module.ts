import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedComponent } from './assigned/assigned.component'; 
import { NavigationComponent } from './navigation/navigation.component';
import { UnassignedComponent } from './unassigned/unassigned.component';

const routes: Routes = [ 
  {path:'',redirectTo:'assign',pathMatch:'full'},
  {path:'assign',component:AssignedComponent},
  {path:'unassign',component:UnassignedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
