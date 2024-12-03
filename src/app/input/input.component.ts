/*
File: input.component.ts
Author: Teleki László
Copyright:2024 Teleki László
Group: Szoft 2/E
Date: 2024-12-03
*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  area !: number;
  height !: number;
  volume !: number;
  startCalc(){
    console.log("számítás indul ...");
    this.volume = this.area * this.height /3;
  }

}
