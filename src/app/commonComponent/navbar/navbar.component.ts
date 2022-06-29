import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  href:any;
  home = false;
  aboutUsActive = false;
    brandsActive = false;
    partnersActive = false;
    contactusActive = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.href = this.router.url;
        // console.log(this.router.url.split("/"));
        var name = this.router.url.split("/")[1]
        // console.log(this.router.url.split("/").length);
        switch (name) {
          case 'about-us':
              this.aboutUsActive = true;
              this.brandsActive = false;
              this.partnersActive = false;
              this.contactusActive = false;
              this.home = false
            break;
            case 'brands':
              this.aboutUsActive = false;
              this.brandsActive = true;
              this.partnersActive = false;
              this.contactusActive = false;
              this.home = false
            break;
            case 'partners':
              this.aboutUsActive = false;
              this.brandsActive = false;
              this.partnersActive = true;
              this.contactusActive = false;
              this.home = false
            break;
            case 'contact-us':
              this.aboutUsActive = false;
              this.brandsActive = false;
              this.partnersActive = false;
              this.contactusActive = true;
              this.home = false
            break;
        
          default:
            this.aboutUsActive = false;
              this.brandsActive = false;
              this.partnersActive = false;
              this.contactusActive = false;
              this.home = true;
            break;
        }
  }

}
