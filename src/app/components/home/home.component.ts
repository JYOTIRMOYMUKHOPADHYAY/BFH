import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('hello', { static: false }) divHello: ElementRef;
  arrayShow: Array<any> = [
        { name: 'showHome', value: true },
        { name: 'showChainaama', value: false },
        { name: 'showUnclePeters', value: false },
        { name: 'showLassi', value: false },
        { name: 'showBetweenBreads', value: false }
      ]
      id:any=null;
  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.divHello.nativeElement.click();
    // }, 1000);

  //   var x = setInterval(
  //     this.divHello.nativeElement.click(), 2000)
  // }

 this.id = setInterval(() => {
    this.divHello.nativeElement.click(); 
  }, 5000);
}

ngOnDestroy() {
  clearInterval(this.id);
}
}
