import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigned',
  template: `
  <div class="assign">
    <ul class="nav">
        <li class ="col-md-6">
          <a class="active" class="line" style="text-decoration:none;" [routerLink]="['/assign']">Assigned</a>
        </li>
        <li class="nav-item" class ="col-md-6">
          <a class="nav-link" class="dline" [routerLink]="['/unassign']">Unassigned</a>
        </li>
    </ul><br><br> 
    <div class="card text-dark bg-light mb-3" style="width: 100%;" *ngFor="let data of assignedData"> 
    <div class="card-body"> 
      <ul>
        <li>{{data.id}}</li>
        <li>{{data.name}}</li>
        <li>{{data.education}}</li>
      </ul>
    </div>
    </div>
  </div>
  `,
  styleUrls: ['./assigned.component.css']
})
export class AssignedComponent implements OnInit {

  constructor() { }

  assignedData = [
    {'id':'1','name':'Supriya Jadhav','education':'Mechanical'},
    {'id':'2','name':'Sandhya Jadhav','education':'Computer'},
    {'id':'3','name':'Prashant Jadhav','education':'Computer'},
    {'id':'4','name':'Shailaja Jadhav','education':'BA.'}
  ]

  ngOnInit(): void {
  }

}
