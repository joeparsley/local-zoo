import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Animal Tracker!</h1>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <hr>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickSender)="finishedEditing()"></edit-animal>
    <hr>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carinovore', 'Northern Trail', 5, 'female', 'cool shade', 'loud Noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carinovore', 'Tropical Forest', 6, 'male', 'Laying in the sun', 'toys that are not rope based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'female', 'delicate roots and leaves', 'loud Noises')
  ];

  selectedAnimal = null;

  finishedEditing() {
    this.selectedAnimal = null;
  }

  editAnimal(clickedAnimal) {
  this.selectedAnimal = clickedAnimal;
  }

  addAnimal(newAnimalFromChild: Animal) {
  this.masterAnimalList.push(newAnimalFromChild);
}

}
