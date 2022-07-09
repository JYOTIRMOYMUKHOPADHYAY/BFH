import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  data: any = {};
  constructor(private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(( hero ) => {
      // do something with your resolved data ...
      console.log(hero)
      this.data = hero['data'];
    })
  }

  redirectTO(data){
    console.log(data);
    // this.route.navigateByUrl(data)
    window.open(data)
  }
}
