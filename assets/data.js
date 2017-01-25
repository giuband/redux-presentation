import { getRandomPeople, getRandomPeoplePickedDays, range } from './utils';

export const useLargeState = true;

export const lodgifyData = {
  giuseppe: [22, 23, 24],
  david: [2, 3],
  yann: [10, 11, 12],
};

export const daysInAMonth = range(30).map(i => i + 1);
export const lodgifyPeople = Object.keys(lodgifyData);
export const randomPeople = getRandomPeople(1000);
export const randomPeoplePickedDays = getRandomPeoplePickedDays(randomPeople);
