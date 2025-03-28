import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { RegisterComponent } from "./header/topmenu/register/register.component";

@Component({
  selector: 'app-root',
  standalone  : true,
  imports: [RouterModule, HeaderComponent, TopHeaderComponent, FormsModule, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
}
