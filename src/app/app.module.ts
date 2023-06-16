import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BrandsComponent } from './components/brands/brands.component';
import { OurPartenerComponent } from './components/our-partener/our-partener.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NavbarComponent } from './commonComponent/navbar/navbar.component';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { FooterComponent } from './commonComponent/footer/footer.component';
import { NgxTimelineAlbeModule } from 'ngx-timeline-albe';
import { ViewWebsiteButtonComponent } from './view-website-button/view-website-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { CancellationComponent } from './cancellation/cancellation.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    BrandsComponent,
    OurPartenerComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent,
    ViewWebsiteButtonComponent,
    TermsConditionsComponent,
    PrivacyPoliciesComponent,
    CancellationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTimelineAlbeModule ,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
