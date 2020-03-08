console.log( 'js' );
$(document).ready( readyNow );

function readyNow(){
    console.log( 'JQ' );

    // handle click event, employee in.
    $( '#js-submitButton' ).on( 'click', addEmployeeIn );
    //console.log( 'in addEmployeeIn', firstName, lastName, id, title, annualSalary );
    calculateMonthlyExpense();

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
}   // end add employee to array
    newEmployee( 'Jen', 'Barber', '2431', 'Team Lead', '48000' );


    //  Get user input to create new employee object
  function addEmployeeIn(){
      let firstName = $( '#js-first' ).val();
      let lastName = $( '#js-last' ).val();
      let id = $( '#js-idNumber' ).val();
      let title = $( '#js-title' ).val();
      let annualSalary = $( '#js-annualSalary' ).val();

    //   add employee in
    newEmployee( firstName, lastName, id, title, annualSalary );
    // empty fields
    firstName = $( '#js-first' ).val( '' );
    lastName = $( '#js-last' ).val( '' );
    id = $( '#js-idNumber' ).val( '' );
    title = $( '#js-title' ).val( '' );
    annualSalary = $( '#js-annualSalary' ).val( '' );

    calculateMonthlyExpense();

  } 

  // calculate monthly expense of salaries  
  function calculateMonthlyExpense(){
    console.log( 'in calculateMonthlyExpense' );
    //  loop thru array for salaries
    let monthlyTotal = 0;
    for( i = 0; i < employeeFile.length; i++){
        monthlyTotal += Number( employeeFile[ i ].annualSalary );
    }  // end for loop
    monthlyTotal = monthlyTotal/12;
    
    console.log( 'monthlyTotal', monthlyTotal );
    //diplay to DOM
    let el = $( "#js-monthlySalary" );
    el.empty();
    el.append( monthlyTotal );
    
  } // end calculate monthly expenses







