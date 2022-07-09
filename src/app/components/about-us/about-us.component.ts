import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimelineItem } from 'ngx-timeline-albe';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  data: Array<TimelineItem> | String;
  @ViewChild('hello', { static: false }) divHello: ElementRef;
  id: any = null;
  constructor() { }

  ngOnInit(): void {

    this.id = setInterval(() => {
      this.divHello.nativeElement.click();
    }, 5000);

    this.data = `[ {
      "datetime": "2019-01-01",
      "body": [{
          "tag": "h5",
          "content": "Expansion into cafe model in Bangalore."
        }
      ]
    }, {
      "datetime": "2018-01-01",
      "body": [{
          "tag": "h5",
          "content": "Inception of The Lassi Pub, Sub Spot, Maggination."
        }
      ]
    },{
      "datetime": "2017-03-29",
      "body": [
        {
          "tag": "h5",
          "content": "Inception of Chainaama and Uncle Peter's Pancakes and outlets opened in Goa and Bangalore."
        }
      ]
    }, {
      "datetime": "2020-01-01",
      "body": [{
          "tag": "h5",
          "content": "Birth of Between the Bread,expansion into a total of 5 outlets."
        }
      ]
    }, {
      "datetime": "2021-01-01",
      "body": [{
          "tag": "h5",
          "content": "Expansion into a total of 13 outlets across 7 cities pan India."
        }
      ]
    },
    {
      "datetime": "2022-01-01",
      "body": [{
          "tag": "h5",
          "content": "Expansion into a total of 22 outlets across 12 cities pan India."
        }
      ]
    }]`;
  }
  ngAfterViewInit() {
    console.log("oip")
 }
 ngOnDestroy() {
  clearInterval(this.id);
}
}
