import { Component, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template:`
  <div>
    <h1>New Animal </h1>
    <label>Enter Animal Species:</label>
    <input #newAnimalSpecies />
    <br>
    <label>Enter Animal Name:</label>
    <input #newAnimalName />
    <br>
    <label>Enter Animal Age:</label>
    <input #newAnimalAge />
    <br>
    <label>Enter Animal Diet:</label>
    <input #newAnimalDiet />
    <br>
    <label>Enter Animal Location:</label>
    <input #newAnimalLocation />
    <br>
    <label>Enter Animal Caretakers:</label>
    <input #newAnimalCaretakers />
    <br>
    <label>Enter Animal Sex:</label>
    <input #newAnimalSex />
    <br>
    <label>Enter Animal Likes:</label>
    <input #newAnimalLikes />
    <br>
    <label>Enter Animal Dislikes:</label>
    <input #newAnimalDislikes />
    <br>
    <button (click)="submitForm(newAnimalSpecies.value, newAnimalName.value, newAnimalAge.value,
    newAnimalDiet.value, newAnimalLocation.value, newAnimalCaretakers.value, newAnimalSex.value, newAnimalLikes.value, newAnimalDislikes.value);">Add</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
