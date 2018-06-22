import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{inside()}}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mayank';
  inside()
  {
    return "inside function";
  }

}
