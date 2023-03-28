let table = document.createElement('table'); // Creates a table and stores it in the variable "table"

let headerRow = document.createElement('tr'); // Creates a header row and stores it in the variable "headerRow"



//Code bellow is responsible for createing the header names and storing them in their respective variables 
let type_ID = document.createElement('th');
let type_Fname = document.createElement('th');
let type_Lname = document.createElement('th');
let type_Email = document.createElement('th'); 

//Appends the values to their respective variable names
type_ID.textContent = 'Id';
type_Fname.textContent = 'First Name';
type_Lname.textContent = 'Last Name';
type_Email.textContent = 'Email';

//Appends the variables to the headerrow
headerRow.appendChild(type_ID);
headerRow.appendChild(type_Fname);
headerRow.appendChild(type_Lname);
headerRow.appendChild(type_Email);

//Appends the headerRow to the table variable

table.appendChild(headerRow);

//Appends the table to the HTML table Container called "table"
let tablecontainer = document.getElementById('table');
tablecontainer.appendChild(table);


/******************* 
This function will be responsible for clearing the table by using the .innerHTML command which reads the contents of the  then sets them to empty
Then the function calls 
********************/
function clearTable(){

    let tableRows = table.getElementsByTagName('tr'); //Gets all row values with the 'tr' value which is the data cells other than the header

    //This is repsonsible for deleting all rows in the table with tag 'tr' exept the first row which is the header
    while(tableRows.length > 1){ 
        tableRows[1].remove(); 
    }
    

}


//this function is responsible for displaying all information from the JSON file to the table 
function displayAll(){
fetch('db.json')
.then(response => response.json())
.then(data => {
    const users = data.users; 
//itterates through the length of the JSON data
for(let i = 0; i<users.length;i++){

    /*******************
     Very simmaler to previous code, but it is responsible for creating a row in the table, then adding the data to the row
     *******************/

    //declares the necessary variables with their respective HTML tags. This allows specific sections of the table to be modified from the style.css 
    let row = document.createElement('tr');
    let value_ID = document.createElement('td');
    let value_FName = document.createElement('td');
    let value_LName = document.createElement('td');
    let value_Email = document.createElement('td');

    //This code takes the position i from the for loop and accesses the users array to get the 'id','firstName','lastName',and 'email'
    value_ID.textContent = users[i].id; 
    value_FName.textContent = users[i].firstName;
    value_LName.textContent = users[i].lastName;
    value_Email.textContent = users[i].email; 
    //This code appends the values to the row the for loop is currently on 
    row.appendChild(value_ID);
    row.appendChild(value_FName);
    row.appendChild(value_LName);
    row.appendChild(value_Email);

    table.appendChild(row);  // This appends the rows (which contain the values) to the table 
     
}
    
    tablecontainer.appendChild(table); //this appends the table from above to the HTML table container 
    
    
    




});

}

let button = document.getElementById('button_display'); // assignes the variable button to the element ID button_display from the HTML 
 
//This section of code creates a listener for when the button is clicked then runs the two functions clearTable(); and displayAll;
button.addEventListener('click',()=>{
    console.log("Button clicked!");
    clearTable();
    console.log("Table Cleared");
    displayAll();
    
    console.log("Table Displayed");
})
