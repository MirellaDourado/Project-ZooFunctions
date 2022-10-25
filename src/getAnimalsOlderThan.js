const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalInfo = data.species.filter((specie) => specie.name === animal);

  return animalInfo[0].residents.every((anm) => anm.age >= age);
}

module.exports = getAnimalsOlderThan;
