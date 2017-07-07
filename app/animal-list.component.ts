import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
  <h1>List of animals currently in the zoo!</h1>
  <ul>
    <li *ngFor='let currentAnimal of childAnimalList'>
    <h2>{{currentAnimal.name}}</h2>
    - Animal Sepcies: {{currentAnimal.species}}
    <br>
     - Animal Age: {{currentAnimal.age}}
    <br>
     - Animal Diet: {{currentAnimal.diet}}
    <br>
     - Animal Location: {{currentAnimal.location}}
    <br>
     - Animal CareTakers: {{currentAnimal.caretakers}}
    <br>
     - Animal Sex: {{currentAnimal.sex}}
    <br>
     - Animal Likes: {{currentAnimal.likes}}
    <br>
     - Animal Dislikes: {{currentAnimal.dislikes}}
    <br>
    <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
    <br>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}
