import { defer } from 'rxjs/observable/defer';
import { animationFrame } from 'rxjs/scheduler/animationFrame';
import { interval } from 'rxjs/observable/interval';
import { map } from 'rxjs/operators/map';
import { takeWhile } from 'rxjs/operators/takeWhile';

const timeElapsed = defer(() => {
  const start = animationFrame.now();
  return interval(1).pipe(
    map(() => Math.floor((Date.now() - start))
    ));
});
export const durationForAnimation = (totalMs) => timeElapsed.pipe(
  map((elapsedMs: number) => elapsedMs / totalMs),
  takeWhile(t => t <= 1)
);
export const amount = (d) => (t) => t * d;
export const elasticOut = (t) => Math.sin(-5.0 * (t + 1.0) * Math.PI / 2) * Math.pow(2.0, -10.0 * t) + 1.0;

export const elasticAnimation = (time = 1000, value) => {
  return durationForAnimation(time)
    .pipe(
      map(elasticOut),
      map(amount(value))
    );
};
