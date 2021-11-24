import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigned',
  template: `
  <div class="assign">
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
    {'id':'3','name':'Prashant Jadhav','education':'Computer'}
  ]

  ngOnInit(): void {
  }

}
