const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

const animalVerification = (target) => species.some((specie) => specie.name === target);

const dayVerification = (target) => Object.prototype.hasOwnProperty.call(hours, target);

const findAnimalDay = (animal) => species.find((specie) => specie.name === animal).availability;

const findDayAnimal = (day) => species.filter((specie) => specie.availability.includes(day))
  .map((animal) => animal.name);

const schedule = () => ({
  Tuesday: { officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: findDayAnimal('Tuesday') },
  Wednesday: { officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: findDayAnimal('Wednesday') },
  Thursday: { officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: findDayAnimal('Thursday') },
  Friday: { officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: findDayAnimal('Friday') },
  Saturday: { officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: findDayAnimal('Saturday') },
  Sunday: { officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: findDayAnimal('Sunday') },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
});

function getSchedule(scheduleTarget) {
  if (animalVerification(scheduleTarget) === true) {
    return findAnimalDay(scheduleTarget);
  } if (dayVerification(scheduleTarget) === true) {
    return { [scheduleTarget]: schedule()[scheduleTarget] };
  }
  return schedule();
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
