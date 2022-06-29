import { Component, OnInit } from '@angular/core';
import { commonClass } from 'src/app/commonClass/commonClass';

@Component({
  selector: 'app-our-partener',
  templateUrl: './our-partener.component.html',
  styleUrls: ['./our-partener.component.scss']
})
export class OurPartenerComponent implements OnInit {
  LOCAITON_LIST = commonClass.LOCATIONS_NAME;
  constructor() { }

  ngOnInit(){
    // window.location.reload();
  }

}
