import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedComponent } from './assigned/assigned.component';  
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UnassignedComponent } from './unassigned/unassigned.component';

const routes: Routes = [ 
  {path:'',redirectTo:'assign',pathMatch:'full'},
  {path:'assign',component:AssignedComponent},  
  {path:'unassign',component:UnassignedComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
