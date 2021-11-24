import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unassigned',
  template: `
  <div class="unassigned">
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
    {'id':'3','name':'Megha Kambale','education':'Civil'}
  ]

  ngOnInit(): void {
  }

}
