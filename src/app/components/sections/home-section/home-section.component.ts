import { Component, Signal } from '@angular/core';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [],
  templateUrl: './home-section.component.html'
})
export class HomeSectionComponent {

  public email: string = 'fercbrt@gmail.com';

  showCV(): void {
    window.open('documents/cv.pdf', '_blank');
  }

  copyEmail(): void {
    navigator.clipboard.writeText(this.email);
  }

}
