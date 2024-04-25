// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let newEmployee = true;
  const employeesArray = [];
  while (newEmployee) {
    
  //ask for first name
  const firstName = prompt("What is the employees first name?");
  //ask for last name
  const lastName = prompt("What is the employees last name?");
  //ask for salary
  let salary = prompt("What is the employees salary?");

  //sets a NaN for invalid salary inputs
  if (isNaN(salary)){
    salary = 0;
}
//sets a varriable for me to pull from
  const employee = {
  firstName: firstName,
  lastName: lastName,
  salary: parseFloat(salary)
};

employeesArray.push(employee);

  //ask if you want to add another
  newEmployee = confirm("add another employee?");
  }
  //once done return the array
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employees) {
    let totalSalary = 0;
    const totalEmployees = employees.length;

    for (const employeesArray of employees){
      totalSalary += employeesArray.salary;
    }
    //sets a variable for the average salories to be calculated
    let averageSalary = totalSalary / totalEmployees;
    console.log(`The average salary of our ${totalEmployees} employees is $ ${averageSalary}`);
}


// Select a random employee
const getRandomEmployee = function(employees) {
  // TODO: Select and display a random employee
    let index = Math.floor(Math.random() * employees.length);
    //I could not get the math function figured out but I needed to get this submitted. 
     console.log(employees[index].firstName + " is the winner of the raffle");

  //const random = (Math.floor() * employeesArray.length)
  //console.log(random);
}

//I had to change a some paramenters in the starter code to get it to function properly. the overall code was not changed.

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employees) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employees.length; i++) {
    const currentEmployee = employees[i];

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
  const employeesArray = collectEmployees();

  console.table(employeesArray);

  displayAverageSalary(employeesArray);

  console.log('==============================');

  getRandomEmployee(employeesArray);

  employeesArray.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employeesArray);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
