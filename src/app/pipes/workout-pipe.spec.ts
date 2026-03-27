import { WorkoutPipe } from "./workout-pipe";

describe('Workout pipe', () => {
    it('test pipe', ()=> {
        const pi = new WorkoutPipe();

        expect(pi.transform('ha ha', '')).toBe('Transformed string ha ha');
    });
});