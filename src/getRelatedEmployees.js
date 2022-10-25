const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees
  .some((employee) => employee.managers.some((manag) => manag === id));

const ManagerInfo = (managerId) => employees.filter((employee) => employee.managers
  .some((manager) => manager === managerId));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return ManagerInfo(managerId).map((nome) => `${nome.firstName} ${nome.lastName}`);
}

function manager(id) {
  const existence = data.employees.find((empregado) => {
    return empregado.managers.find((manageR) => {
      return manageR.id === id;
    });
  });
  if (existence !== undefined) {
    return false;
  }
  return true;
}

console.log(data.employees.manager);


module.exports = { isManager, getRelatedEmployees };
