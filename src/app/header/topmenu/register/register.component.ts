import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingninComponent } from './singnin/singnin.component';
import { TopmenuComponent } from '../topmenu.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, TopmenuComponent, SingninComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {}