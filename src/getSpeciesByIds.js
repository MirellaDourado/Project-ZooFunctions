const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const lion = ids.map((specie) => data.species.filter((id) => id.id === specie));

  return lion.map((animal) => animal[0]);
}

module.exports = getSpeciesByIds;
