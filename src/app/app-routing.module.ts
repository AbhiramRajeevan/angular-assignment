import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferRideComponentComponent } from './offer-ride-component/offer-ride-component.component';

const routes: Routes = [
  {path:"",component:OfferRideComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
