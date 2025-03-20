import { Component } from '@angular/core';
import { HeaderComponent } from '../header.component';
@Component({
  selector: 'topmenu',
  standalone  : true, 
  imports: [HeaderComponent],
  templateUrl: './topmenu.component.html',
  styleUrl: './topmenu.component.css'
})
export class TopmenuComponent {

}
