import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spartacus-amazona';
  value: number = 0;
  show: boolean = true;
  changeValue() {
    this.value = this.value + 1;
  }
  toggle() {
    this.show = !this.show;
  }
}
