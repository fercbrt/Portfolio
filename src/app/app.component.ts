import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSectionComponent } from './components/sections';
import { NavBarComponent } from './components/items';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            HomeSectionComponent,
            NavBarComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
