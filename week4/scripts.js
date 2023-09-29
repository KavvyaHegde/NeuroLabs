// Define a function to handle the login button click
function login() {
    // You can add your login logic here
    alert("Login button clicked");
}

// Define a function to handle the "Add Contact" button click
function addContact() {
    // Get the input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Create a new list item to display the contact
    var listItem = document.createElement("li");
    listItem.textContent = "Name: " + name + ", Email: " + email;

    // Add the new contact to the contact list
    var contactList = document.getElementById("contactList");
    contactList.appendChild(listItem);

    // Clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}

// You can add more JavaScript code here as needed

// Optional: Add an event listener for the "Add Contact" button
var addButton = document.querySelector("button[type='button']");
addButton.addEventListener("click", addContact);

// Optional: You can add more event listeners and functionality as needed
