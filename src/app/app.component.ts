import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
    standalone: true,
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  writeClassName(className: string): void {
    document.write(className);
  }
}