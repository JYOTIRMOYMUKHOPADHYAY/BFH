import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arrayShow: Array<any> = [
        { name: 'showHome', value: true },
        { name: 'showChainaama', value: false },
        { name: 'showUnclePeters', value: false },
        { name: 'showLassi', value: false },
        { name: 'showBetweenBreads', value: false }
      ]
  constructor() { }

  ngOnInit(): void {
  }
}
