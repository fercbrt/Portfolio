import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSectionComponent, EducationSectionComponent, ProjectsSectionComponent, SkillsSectionComponent } from './components/sections';
import { NavBarComponent } from './components/items';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HomeSectionComponent,
    EducationSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
