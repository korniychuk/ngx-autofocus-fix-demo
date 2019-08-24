import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <div class="__header" *ngIf="name">
      <span class="__name">{{ name }}</span>
    </div>
    <div class="__body">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
        margin-top: 40px;
        display: block;
    }
    .__name {
        padding: 0 20px;
        font-size: 1.5em;
    }
    .__header {
        display: flex;
        align-items: center;
    }

    .__header:before {
        width: 70px;
        flex: 0 1 auto;
    }
    .__header:after {
        flex: 1 1 auto;
    }
    .__header:before,
    .__header:after {
        height: 0;
        content: '';

        /* default <hr> styles below */
        unicode-bidi: isolate;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
        margin-inline-start: auto;
        margin-inline-end: auto;
        overflow: hidden;
        border-style: inset;
        border-width: 1px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {

  @Input()
  public name?: string;

}
