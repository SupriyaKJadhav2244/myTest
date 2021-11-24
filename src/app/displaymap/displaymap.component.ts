import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaymap',
  template: `
  <div>
    <h3>Tasks</h3>
    <img src="./../assets/GoogleMap.PNG" alt="Google Map">
  </div>
  `,
  styleUrls: ['./displaymap.component.css']
})
export class DisplaymapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
