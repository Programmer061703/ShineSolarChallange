let table2 = document.createElement('table2'); // Creates a table and stores it in the variable "table2"

let headerRow2 = document.createElement('tr'); // Creates a header row and stores it in the variable "headerRow2"



//Code bellow is responsible for createing the header names and storing them in their respective variables 
let type_uID = document.createElement('th');
let type_Price = document.createElement('th');
let type_Product = document.createElement('th');
let type_Status = document.createElement('th'); 

//Appends the values to their respective variable names
type_uID.textContent = 'User ID';
type_Price.textContent = 'Price';
type_Product.textContent = 'Product';
type_Status.textContent = 'Status';

//Appends the variables to the headerrow2
headerRow2.appendChild(type_uID);
headerRow2.appendChild(type_Price);
headerRow2.appendChild(type_Product);
headerRow2.appendChild(type_Status);

//Appends the headerRow2 to the table2 variable

table2.appendChild(headerRow2);

//Appends the table to the HTML table Container called "table2"
let tablecontainer2 = document.getElementById('table2');
tablecontainer2.appendChild(table2);


/******************* 
This function is responsible for clearing the table by using the .innerHTML command which reads the contents of the table2 then sets them to empty 
********************/
function clearTable2(){

    let tableRows2 = table2.getElementsByTagName('tr'); //Gets all row values with the 'tr' value which is the data cells other than the header

    //This is repsonsible for deleting all rows in the table with tag 'tr' exept the first row which is the header
    while(tableRows2.length > 1){ 
        tableRows2[1].remove(); 
    }
    

}

//this function is responsible for displaying the orders information from the JSON file to the table 
function displayAll2(){
fetch('db.json')
.then(response => response.json())
.then(data => {
    const orders = data.orders; 
//itterates through the length of the JSON data
for(let i = 0; i<orders.length;i++){

    //declares the necessary variables with their respective HTML tags. This allows specific sections of the table to be modified from the style.css 
    let row2 = document.createElement('tr');
    let value_userID = document.createElement('td');
    let value_Price = document.createElement('td');
    let value_Prodcut = document.createElement('td');
    let value_Status = document.createElement('td');

    //This code takes the position i from the for loop and accesses the orders array to get the 'userId','price','product',and 'status'
    value_userID.textContent = orders[i].userId; 
    value_Price.textContent = orders[i].price;
    value_Prodcut.textContent = orders[i].product;
    value_Status.textContent = orders[i].status; 
    //This code appends the values to the row the for loop is currently on 
    row2.appendChild(value_userID);
    row2.appendChild(value_Price);
    row2.appendChild(value_Prodcut);
    row2.appendChild(value_Status);

    table2.appendChild(row2);  // This appends the rows (which contain the values) to the table 
     
}
    
    tablecontainer2.appendChild(table2); //this appends the table from above to the HTML table container 
    
    
    




});

}



let button2 = document.getElementById('button2_display'); // assignes the variable button to the element ID button_display from the HTML 

 
//This section of code creates a listener for when the button is clicked then runs the two functions clearTable2(); and displayAll2();
button2.addEventListener('click',()=>{
    console.log("Button clicked!");
    clearTable2();
    console.log("Table Cleared");
    displayAll2();
    
    console.log("Table Displayed");
})
