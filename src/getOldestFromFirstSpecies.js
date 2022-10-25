const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(employeeId) {
  const animalsId = data.employees.find((employee) => employee.id === employeeId).responsibleFor;

  const oldest = species.find((specie) => animalsId.find((id) => specie.id === id)).residents
    .reduce((a, b) => (a.age > b.age ? a : b));

  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
