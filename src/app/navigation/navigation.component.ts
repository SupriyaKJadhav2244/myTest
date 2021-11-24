import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
  <div class="row"> 
    <ul class="nav nav-pills">
      <li class="nav-item" class ="col-md-6">
        <a class="nav-link active" aria-current="page" [routerLink]="['/assign']">Assigned</a>
      </li>
      <li class="nav-item" class ="col-md-6">
        <a class="nav-link " [routerLink]="['/unassign']">Unassigned</a>
      </li>
    </ul> 
  </div> 
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { } 

  ngOnInit(): void {
  }

}
