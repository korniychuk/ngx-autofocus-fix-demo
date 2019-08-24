import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject, Observable, interval } from 'rxjs';
import * as $ from 'rxjs/operators';

const createArrayOfValuesByInterval = (delay = 500) => (o: Observable<any>): Observable<number[]> => o.pipe(
  $.switchMap(() =>
    interval(delay).pipe(
      $.take(5),
      $.scan((acc: number[], i: number) => (acc.push(i), acc), []),
      $.startWith([]),
    ),
  ),
);

@Component({
  selector: 'app-simple-example',
  templateUrl: './simple-example.component.html',
  styleUrls: ['./simple-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleExampleComponent implements OnInit {

  public showSimpleInput = false;
  public showSimpleButton = false;

  public buttons$!: Observable<number[]>;
  public inputs$!: Observable<number[]>;

  private inputsTrigger$ = new Subject<void>();
  private buttonsTrigger$ = new Subject<void>();

  public ngOnInit() {
    this.buttons$ = this.buttonsTrigger$.pipe(createArrayOfValuesByInterval());
    this.inputs$ = this.inputsTrigger$.pipe(createArrayOfValuesByInterval());
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

  public insertInputs(): void {
    this.inputsTrigger$.next();
  }

}
