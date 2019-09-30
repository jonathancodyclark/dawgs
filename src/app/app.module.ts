import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DogsComponent } from './dogs/dogs.component';
import { PuppiesComponent } from './puppies/puppies.component';
import { PageNotFoundComponent } from './not-found/not-found.component';

import {CrystalLightboxModule} from '@crystalui/angular-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ContactComponent,
    DogsComponent,
    PuppiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrystalLightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
