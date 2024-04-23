// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let newEmployee = true;
  const employeesArray = [];
  while (newEmployee) {
    
  //ask for first name
  let firstName = prompt("What is the employees first name?");
  //ask for last name
  let lastName = prompt("What is the employees last name?");
  //ask for salary
  let salary = prompt("What is the employees salary?");

  //add to array
  employeesArray.push({firstName, lastName, salary});

  //ask if you want to add another
  newEmployee = confirm("add another employee?");
  }
  //once done return the array
  return employeesArray
}




const validateSalaries = function (employeesArray) {
  // Filter out employees without a valid salary
  const validSalariedEmployees = employeesArray.filter(function(employee) {
    //other stuff
    const expression = Number(employee.salary); //true or false 
    return expression; //only return employees whose salary is a number, or when number is valid/true
  });
  return validSalariedEmployees;
}

const grabEmployeeSalaries = function(employees) {
   // Extract salaries from employee objects
  const salaries = employees.map(employee => employee.salary);
  return salaries;
}

const getSalariesAverage = function(validSalaries) {
   // Calculate the sum of all salaries
   //add all the salaries together, and then divide by total

   let sum = 0; //[10, 23, 42, 15]

   for (let i = 0; i < validSalaries.length; i++) {
      sum = sum + Number(validSalaries[i]);
   }
   console.log("Sum of Salaries:", sum);
   // Calculate the average salary
   const average = sum / validSalaries.length;

   return average;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {

}


const test = function() {
  const employeesArray = collectEmployees()
  //console.log('this is the employees array', employeesArray);
  const validSalariedEmployees = validateSalaries(employeesArray);
  //console.log("These employees have valid salaries", validSalariedEmployees);
  //const salary = displayAverageSalary(employeesArray)
  //console.log('this is the salaries', salary);
  const salaries = grabEmployeeSalaries(validSalariedEmployees);
  //console.log("Array of employee salaries", salaries);
  const average = getSalariesAverage(salaries);
  console.log("Your average employee salary is $", average);
  displayAverageSalary(average);
}

test();



// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

const test1 = function() {
  
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
