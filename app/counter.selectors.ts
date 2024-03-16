import { createSelector } from '@ngrx/store';

export const selectCounterState =  (state:{count : number}) => state.count;

  export const selectBigCount = createSelector(
    selectCounterState,
    (state) => state *2
  )