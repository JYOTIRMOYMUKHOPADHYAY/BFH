import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroResolver } from './commonServices/resolver';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { OurPartenerComponent } from './components/our-partener/our-partener.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { CancellationComponent } from './cancellation/cancellation.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about-us", component:AboutUsComponent},
  {path: "brands/:id", component:BrandsComponent, resolve: {
    data:HeroResolver
  }},
  {path: "partners", component:OurPartenerComponent},
  {path: "contact-us", component:ContactUsComponent},
  {path: "terms-and-conditions", component:TermsConditionsComponent},
  {path: "privacy_policy", component:PrivacyPoliciesComponent},
  {path: "cancellation_policy", component:CancellationComponent},
  // { path: 'customers', loadChildren: () => import('./brands/brands.module').then(m => m.BrandsModule) },
  {path: "**", redirectTo:""}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HeroResolver]
})
export class AppRoutingModule { }
