import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixedNavComponent } from './fixed-nav/fixed-nav.component';
import { FooterComponent } from './footer/footer.component';
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
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FixedNavComponent,
    FooterComponent,
    HomeComponent,
    BrandedComponent,
    HouseholdComponent,
    FruitComponent,
    KitchenComponent,
    BeverageComponent,
    PetComponent,
    FrozenComponent,
    BreadComponent,
    EventComponent,
    AboutComponent,
    ServiceComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    DetailComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    FixedNavComponent
  ]
})
export class AppModule { }
