import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DogsComponent } from './dogs/dogs.component';
import { ContactComponent } from './contact/contact.component';
import { PuppiesComponent } from './puppies/puppies.component';
import { PageNotFoundComponent } from './not-found/not-found.component'


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '',   component: HomeComponent },
    { path: 'dogs', component: DogsComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'puppies', component: PuppiesComponent},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
