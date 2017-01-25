import faker from 'Faker';

export const range = num => [...Array(num).keys()];

export const getRandomPeople = (peopleCount = 1000) => {
  const peopleNames = range(peopleCount).map(() => faker.Name.findName());
  return peopleNames;
};

export const getRandomPeoplePickedDays = (randomPeople) => {
  const daysPickedPerPerson = 5;
  const largeInitialState = randomPeople.reduce((curState, name) => Object.assign(curState, {
    [name]: range(daysPickedPerPerson).map(() => parseInt(30 * Math.random(), 10)),
  }), {});
  return largeInitialState;
};
