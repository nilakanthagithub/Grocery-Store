import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BrandedComponent } from './branded/branded.component';
import { HouseholdComponent } from './household/household.component';
import { FruitComponent } from './fruit/fruit.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BeverageComponent } from './beverage/beverage.component';
import { PetComponent } from './pet/pet.component';
import { FrozenComponent } from './frozen/frozen.component';
import { BreadComponent } from './bread/bread.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'branded', component: BrandedComponent },
  { path: 'household', component: HouseholdComponent },
  { path: 'fruit', component: FruitComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'beverage', component: BeverageComponent },
  { path: 'pet', component: PetComponent },
  { path: 'frozen', component: FrozenComponent },
  { path: 'bread', component: BreadComponent },
  { path: 'event', component: EventComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'detail/:id', component: DetailComponent },
  // { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
