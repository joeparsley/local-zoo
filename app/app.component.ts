import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Animal Tracker!</h1>
    <animal-list></animal-list>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carinovore', 'Northern Trail', 5, 'female', 'cool shade', 'loud Noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carinovore', 'Tropical Forest', 6, 'male', 'Laying in the sun', 'toys that are not rope based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'female', 'delicate roots and leaves', 'loud Noises')
  ];

}


// <ul>
//   <li></li>
// </ul>
