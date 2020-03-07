console.log( 'js' );
$(document).ready( readyNow );

function readyNow(){
    console.log( 'JQ' );

}

// the application should have: employee first name, last name, ID, title, annual salary.
// A "Submit" button should collect the form information to calculate monthly cost, append information to 
// the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the DOM.
//  If total monthly costs exceeds &20,000, add a red background color to the total monthly cost.
//  Create a delete button that removes an employee from the DOM. For base mode, it does not need to remove that Employee's
//  salary from the reported total.


let employeeFile = [];

//  add employees to array

function newEmployee(firstNameInput, lastNameInput, idInput, titleInput, annualSalaryInput ){
    console.log( 'in newEmployee', firstNameInput, lastNameInput, idInput, titleInput, annualSalaryInput );
    const newEmployeeObject = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        id: idInput,
        title: titleInput,
        annualSalary: annualSalaryInput
    }
    employeeFile.push( newEmployeeObject );
    return true;
} // end add employee to array










