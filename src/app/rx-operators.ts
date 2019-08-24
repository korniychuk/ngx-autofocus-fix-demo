import { Observable, interval } from 'rxjs';
import * as $ from 'rxjs/operators';

export const createArrayOfValuesByInterval = (
  count = 5,
  delay = 500,
) => (o: Observable<any>): Observable<number[]> => o.pipe(
  $.switchMap(() =>
    interval(delay).pipe(
      $.take(count),
      $.scan((acc: number[], i: number) => (acc.push(i), acc), []),
      $.startWith([]),
    ),
  ),
);
