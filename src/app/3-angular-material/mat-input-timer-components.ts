import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { createArrayOfValuesByInterval } from '../rx-operators';

abstract class MatInputTimerBaseComponent implements OnInit {

  public inputs$!: Observable<number[]>;
  public inputs2$!: Observable<number[]>;

  private inputsTrigger$  = new Subject<void>();
  private inputsTrigger2$ = new Subject<void>();

  public ngOnInit() {
    this.inputs$  = this.inputsTrigger$.pipe(createArrayOfValuesByInterval(9));
    this.inputs2$ = this.inputsTrigger2$.pipe(createArrayOfValuesByInterval(9));
  }

  public haveAutofocus(i: number): boolean {
    return !(i % 2);
  }

  public getLabel(i: number): string {
    return this.haveAutofocus(i) ? 'Have autofocus' : 'Don\'t have autofocus';
  }

  public insertInputs(): void {
    this.inputsTrigger$.next();
  }

  public insertInputs2(): void {
    this.inputsTrigger2$.next();
  }

}

@Component({
  selector: 'app-mat-input-timer',
  templateUrl: './mat-input-timer-components.html',
  styleUrls: ['./mat-input-timer-components.css'],
})
export class MatInputTimerComponent extends MatInputTimerBaseComponent {}


@Component({
  selector: 'app-mat-input-timer-on-push',
  templateUrl: './mat-input-timer-components.html',
  styleUrls: ['./mat-input-timer-components.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatInputTimerOnPushComponent extends MatInputTimerBaseComponent {}
