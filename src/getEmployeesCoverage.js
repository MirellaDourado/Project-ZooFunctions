const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

// Verification
const nameVerification = (object) => employees
  .some((employee) => employee.firstName === object.name || employee.lastName === object.name);

const idVerification = (object) => employees.some((employee) => employee.id === object.id);

// With the Employee name
const employeeByName = (object) => employees
  .find((employee) => employee.firstName === object.name || employee.lastName === object.name);

const animalsByEmployeeName = (object) => employeeByName(object).responsibleFor
  .map((id) => species.find((specie) => specie.id === id));

const resultByEmployeeName = (object) => ({
  id: employeeByName(object).id,
  fullName: `${employeeByName(object).firstName} ${employeeByName(object).lastName}`,
  species: animalsByEmployeeName(object).map((animal) => animal.name),
  locations: animalsByEmployeeName(object).map((animal) => animal.location),
});

// With the Employee ID
const employeeById = (object) => employees
  .find((employee) => employee.id === object.id);

const animalsByEmployeeId = (object) => employeeById(object).responsibleFor
  .map((id) => species.find((specie) => specie.id === id));

const resultByEmployeeId = (object) => ({
  id: object.id,
  fullName: `${employeeById(object).firstName} ${employeeById(object).lastName}`,
  species: animalsByEmployeeId(object).map((animal) => animal.name),
  locations: animalsByEmployeeId(object).map((animal) => animal.location),
});

// All Employees
const all = () => employees.map((employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: employee.responsibleFor.map((id) => species
    .find((specie) => specie.id === id)).map((animal) => animal.name),
  locations: employee.responsibleFor.map((id) => species
    .find((specie) => specie.id === id)).map((animal) => animal.location),
}));

// Major function
function getEmployeesCoverage(object) {
  if (object === undefined) {
    return all();
  }
  if (nameVerification(object) === true) {
    return resultByEmployeeName(object);
  } if (idVerification(object) === true) {
    return resultByEmployeeId(object);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
