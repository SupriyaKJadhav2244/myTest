import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: ` 
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { } 

  ngOnInit(): void {
  }

}
