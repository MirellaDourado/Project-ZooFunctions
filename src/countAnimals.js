const data = require('../data/zoo_data');

const specieName = () => data.species.map((specie) => specie.name);

function countAnimals(animal = {}) {
  if (animal.specie && animal.sex) {
    return data.species.filter((anm) => anm.name === animal.specie)[0].residents
      .filter((resident) => resident.sex === animal.sex).length;
  } if (animal.specie) {
    return data.species.filter((specie) => specie.name === animal.specie)[0].residents.length;
  }

  return specieName().reduce((accumulator, value) => ({ ...accumulator,
    [value]: data.species.filter((specie) => specie.name === value)[0].residents.length }), {});
}

console.log(countAnimals());

module.exports = countAnimals;
