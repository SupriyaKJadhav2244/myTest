import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linksl',
  template: `<div class="row"> 
    <ul class="nav nav-pills">
      <li class="nav-item" class ="col-md-6">
        <a class="nav-link" aria-current="page" [routerLink]="['/assign']">Assigned</a>
      </li>
      <li class="nav-item" class ="col-md-6">
        <a class="nav-link" [routerLink]="['/unassign']">Unassigned</a>
      </li>
    </ul> 
  </div> `,
  styleUrls: ['./linksl.component.css']
})
export class LinkslComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
