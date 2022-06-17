import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'ngx-timeline-albe';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  data: Array<TimelineItem> | String;
  constructor() { }

  ngOnInit(): void {
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
          "content": "inception of Chainaama and Uncle Peter's Pancakes and outlets opened in Goa and Bangalore."
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
    }]`;
  }

}
