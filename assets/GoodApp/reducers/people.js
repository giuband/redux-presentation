import { lodgifyPeople, randomPeople, useLargeState } from '../../data';

const initialState = useLargeState ? randomPeople : lodgifyPeople;

const people = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default people;
