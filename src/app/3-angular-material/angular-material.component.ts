import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { createArrayOfValuesByInterval } from '../rx-operators';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AngularMaterialComponent implements OnInit {

  public showSimpleInput = false;
  public showSimpleButton = false;

  public buttons$!: Observable<number[]>;

  private buttonsTrigger$ = new Subject<void>();

  public ngOnInit() {
    this.buttons$ = this.buttonsTrigger$.pipe(createArrayOfValuesByInterval(7));
  }

  public haveAutofocus(i: number): boolean {
    return !(i % 2);
  }

  public getLabel(i: number): string {
    return this.haveAutofocus(i) ? 'Have autofocus' : 'Don\'t have autofocus';
  }

  public insertButtons(): void {
    this.buttonsTrigger$.next();
  }

}

