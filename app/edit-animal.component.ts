import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h2>{{childSelectedAnimal.name}}</h2>
    <h3>Edit Animal</h3>
    <label>Enter Animal Species:</label>
    <input [(ngModel)]="childSelectedAnimal.species" />
    <br>
    <label>Enter Animal Name:</label>
    <input [(ngModel)]="childSelectedAnimal.name" />
    <br>
    <label>Enter Animal Age:</label>
    <input [(ngModel)]="childSelectedAnimal.age" />
    <br>
    <label>Enter Animal Diet:</label>
    <input [(ngModel)]="childSelectedAnimal.diet" />
    <br>
    <label>Enter Animal Location:</label>
    <input [(ngModel)]="childSelectedAnimal.location" />
    <br>
    <label>Enter Animal Caretakers:</label>
    <input [(ngModel)]="childSelectedAnimal.caretakers" />
    <br>
    <label>Enter Animal Sex:</label>
    <input [(ngModel)]="childSelectedAnimal.sex" />
    <br>
    <label>Enter Animal Likes:</label>
    <input [(ngModel)]="childSelectedAnimal.likes" />
    <br>
    <label>Enter Animal Dislikes:</label>
    <input [(ngModel)]="childSelectedAnimal.dislikes" />
    <br>
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickSender.emit();
  }
}
