import { useLargeState, randomPeoplePickedDays, lodgifyData } from '../../data';

const smallInitialState = lodgifyData;

const initialState = (useLargeState) ? randomPeoplePickedDays : smallInitialState;

const pickedDays = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_DAY':
    case 'REMOVE_DAY': {
      const updatedPersonName = action.person;
      const personPickedDays = state[updatedPersonName];
      const updatedPersonDays = (action.type === 'ADD_DAY') ?
        [...personPickedDays, action.day] : personPickedDays.filter(day => day !== action.day);
      return Object.assign({}, state, { [updatedPersonName]: updatedPersonDays });
    }
    default:
      return state;
  }
};

export default pickedDays;
