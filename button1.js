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
//itterates through the length of the JSON data
for(let i = 0; i<data.length;i++){

    /*******************
     Very simmaler to previous code, but it is responsible for creating a row in the table, then adding the data to the row
     *******************/

    let row = document.createElement('tr');
    let value_ID = document.createElement('td');
    let value_FName = document.createElement('td');
    let value_LName = documemnt.createElement('td');
    let value_Email = document.createElement('td');

    value_ID.textContent = data[i].id; 
    value_FName.textContent = data[i].firstName;
    value_LName.textContent = data[i].lastName;
    value_Email.textContent = data[i].email; 

    row.appendChild(value_ID);
    row.appendChild(value_FName);
    row.appendChild(value_LName);
    row.appendChild(value_Email);

    table.appendChild(row); 

    //Since there is a large quantity of data to parse through and it may clip, we can utalize javascripts overflow handler to fix this issue
    //This code handles when the table overflows and declares when to allow scrolling which is set to 150px
    tablecontainer.style.overflowY = "scroll"; 
    tablecontainer.style.height = "150px"; 


}

})

    


}

let button = document.getElementById('button_display'); // assignes the variable button to the element ID button_display from the HTML 
//This section of code creates a listener for when the button is clicked then runs the two functions clearTable(); and displayAll;
button.addEventListener('click',()=>{
    clearTable();
    displayAll();
})
