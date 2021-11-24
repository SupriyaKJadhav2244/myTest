import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
  <div >
    <div class="horizontalNav">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style="color:white;">Login</a>
        </li>
      </ul>
    </div>

    <div class="row">
    <div class="col-md-3 verticalNav">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <app-displaymap></app-displaymap>
    </div>
    <div class="row col-md-3"> 
      <app-navigation></app-navigation>
    </div>
    </div>
  </div> 
  `,
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
