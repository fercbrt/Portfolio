import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

  scroll(el: string) {
    //Get element by id
    var element = document.getElementById(el);
    //Scroll to element
    if (element) {
      element.scrollIntoView({ behavior: 'smooth',  block: 'end'});
    }
  }
}
