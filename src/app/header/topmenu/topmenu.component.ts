import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header.component';
import { RegisterComponent } from '../topmenu/register/register.component';
@Component({
  selector: 'topmenu',
  standalone  : true, 
  imports: [RegisterComponent,CommonModule],
  templateUrl: './topmenu.component.html',
  styleUrl: './topmenu.component.css'
})
export class TopmenuComponent {

}
