import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unassigned',
  template: `
  <div class="unassigned">
    <ul class="nav nav-pills">
        <li class="nav-item" class ="col-md-6">
          <a class="nav-link" class="dline"  [routerLink]="['/assign']">Assigned</a>
        </li>
        <li class="nav-item" class ="col-md-6">
          <a class="nav-link active" style="text-decoration:none;" class="line" class="line"  [routerLink]="['/unassign']">Unassigned</a>
        </li>
    </ul><br><br>   
  <div class="card text-dark bg-light mb-3" style="width: 100%;" *ngFor="let data of unassignedData"> 
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
  styleUrls: ['./unassigned.component.css']
})
export class UnassignedComponent implements OnInit {

  constructor() { }

  unassignedData = [
    {'id':'1','name':'Shital Taware','education':'Mechanical'},
    {'id':'2','name':'Sanghmitra Gaykwad','education':'Elecronics'},
    {'id':'3','name':'Megha Kambale','education':'Civil'},
    {'id':'4','name':'Kishan Jadhav','education':'BA.'}
  ]

  ngOnInit(): void {
  }

}
