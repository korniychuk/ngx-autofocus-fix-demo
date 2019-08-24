import { Component } from '@angular/core';

interface MenuItem {
  url: string;
  name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public menu: MenuItem[] = [
    { url: '1-simple-example',         name: '1. Simple' },
    { url: '2-advanced-example',       name: '2. Advanced' },
    { url: '3-angular-material',       name: '3. Material' },
    { url: '4-global-configuration',   name: '4. Configuration' },
    { url: '5-infinite-scroll',        name: '5. Scroll' },
  ];
}
