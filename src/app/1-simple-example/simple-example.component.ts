import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-example',
  templateUrl: './simple-example.component.html',
  styleUrls: ['./simple-example.component.css']
})
export class SimpleExampleComponent implements OnInit {

  public showSimpleInput = false;
  public showSimpleButton = false;

  public constructor() { }

  public ngOnInit() {
  }

}
