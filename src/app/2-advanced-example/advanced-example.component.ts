import { Component } from '@angular/core';

@Component({
  selector: 'app-advanced-example',
  templateUrl: './advanced-example.component.html',
  styleUrls: ['./advanced-example.component.css']
})
export class AdvancedExampleComponent {

  public values = {
    disable: {
      raw:    [  false,   null,   undefined,   0,   NaN  ],
      string: [ 'false', 'null', 'undefined', '0', 'NaN' ],
    },
    enable: [true, 1, 'true', 'autofocus', 'any string'],
    smart: ['', [], {}],
  };

  public autofocusValue: any = 'autofocus';
  public autofocusFixSmartEmptyCheckValue = false;

  public showInput = false;
}
