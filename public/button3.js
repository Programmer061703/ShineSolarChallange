let table3 = document.createElement('table3'); // Creates a table and stores it in the variable "table3"

let headerRow3 = document.createElement('tr'); // Creates a header row and stores it in the variable "headerRow3"



//Code bellow is responsible for createing the header names and storing them in their respective variables 
let type_uID2 = document.createElement('th');
let type_Price2 = document.createElement('th');
let type_Product2 = document.createElement('th');
let type_Status2 = document.createElement('th'); 

//Appends the values to their respective variable names
type_uID2.textContent = 'User ID';
type_Price2.textContent = 'Price';
type_Product2.textContent = 'Product';
type_Status2.textContent = 'Status';

//Appends the variables to the headerrow3
headerRow3.appendChild(type_uID2);
headerRow3.appendChild(type_Price2);
headerRow3.appendChild(type_Product2);
headerRow3.appendChild(type_Status2);

//Appends the headerRow to the table3 variable

table3.appendChild(headerRow3);

//Appends the table to the HTML table Container called "table3"
let tablecontainer3 = document.getElementById('table3');
tablecontainer3.appendChild(table3);


/******************* 
This function will be responsible for clearing the table by using the .innerHTML command which reads the contents of the  then sets them to empty
Then the function calls 
********************/
function clearTable3(){

    let tableRows3 = table3.getElementsByTagName('tr'); //Gets all row values with the 'tr' value which is the data cells other than the header

    //This is repsonsible for deleting all rows in the table with tag 'tr' exept the first row which is the header
    while(tableRows3.length > 1){ 
        tableRows3[1].remove(); 
    }
    

}



//this function is responsible for displaying all information from the JSON file to the table 
function displayAll3(){
fetch('db.json')
.then(response => response.json())
.then(data => {
    const orders = data.orders.filter(orders => orders.userId == 4); //This is the filter for the rest of the display 
    console.log(orders);
//itterates through the length of the JSON data
for(let i = 0; i<orders.length;i++){

    /*******************
     Very simmaler to previous code, but it is responsible for creating a row in the table, then adding the data to the row
     *******************/

    //declares the necessary variables with their respective HTML tags. This allows specific sections of the table to be modified from the style.css 
    let row3 = document.createElement('tr');
    let value_userID2 = document.createElement('td');
    let value_Price2 = document.createElement('td');
    let value_Prodcut2 = document.createElement('td');
    let value_Status2 = document.createElement('td');

    //This code takes the position i from the for loop and accesses the orders array to get the 'userId','price','product',and 'status'
    value_userID2.textContent = orders[i].userId; 
    value_Price2.textContent = orders[i].price;
    value_Prodcut2.textContent = orders[i].product;
    value_Status2.textContent = orders[i].status; 
    //This code appends the values to the row the for loop is currently on 
    row3.appendChild(value_userID2);
    row3.appendChild(value_Price2);
    row3.appendChild(value_Prodcut2);
    row3.appendChild(value_Status2);

    table3.appendChild(row3);  // This appends the rows (which contain the values) to the table 
     
}
    
    tablecontainer3.appendChild(table3); //this appends the table from above to the HTML table container 
    
    
    




});

}
function filterData(){


}


let button3 = document.getElementById('button3_display'); // assignes the variable button to the element ID button_display from the HTML 

 
//This section of code creates a listener for when the button is clicked then runs the two functions clearTable3(); and displayAll3;
button3.addEventListener('click',()=>{
    console.log("Button clicked!");
    clearTable3();
    console.log("Table Cleared");
    displayAll3();
    console.log("Table Displayed");
})
