let table = document.createElement('table'); // Creates a table and stores it in the variable "table"

let headerRow = document.createElement('tr'); // Creates a header row and stores it in the variable "headerRow"

//Code bellow is responsible for createing the header names and storing them in their respective variables 
let type_ID = document.createElement('th');
let type_Fname = document.createElement('th');
let type_Lname = document.createElement('th');
let type_Email = document.createElement('th'); 

//Appends the values to their respective variable names
type_ID.appendChild('ID');
type_Fname.appendChild('First Name');
type_Lname.appendChild('Last Name');
type_Email.appendChild('Email');

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
    tablecontainer.innerHTML = '';
    tablecontainer.appendChild(table);  

}


//this function is responsible for displaying all information from the JSON file to the table 
function displayAll(){
fetch('db.json')
.then(response => response.json())
.then(data => {


})

    


}