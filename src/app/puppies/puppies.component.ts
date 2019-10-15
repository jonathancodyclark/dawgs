import { Component } from '@angular/core';

@Component({
  selector: 'app-puppies',
  templateUrl: './puppies.component.html',
  styleUrls: ['./puppies.component.css']
})
export class PuppiesComponent {
  title = 'puppies';
  fredimages = [1, 2].map((elem, ndx) => '../assets/images/Fred' + (ndx+1).toString() + '.jpg');
  susanimages = [1, 2].map((elem, ndx) => '../assets/images/Susan' + (ndx+1).toString() + '.jpg');
  jeraldimages = [1, 2].map((elem, ndx) => '../assets/images/Jerald' + (ndx+1).toString() + '.jpg');
  rustyimages = [1, 2].map((elem, ndx) => '../assets/images/Rusty' + (ndx+1).toString() + '.jpg');
  juniorimages = [1, 2].map((elem, ndx) => '../assets/images/Junior' + (ndx+1).toString() + '.jpg');
}