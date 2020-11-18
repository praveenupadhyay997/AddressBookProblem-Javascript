/// Defining the address book class with given properties
class AddressBook
{
    /// Parameterised constructor initialising the instance with values passed
    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.emailId = params[7];
    }
    /// Data attributes of the address book
    /// Getter and Setter for the first name
    get firstName() {return this._firstName;}
    set firstName(firstName)
    {
        let NAME_REGEX= RegExp('^[A-Z]{1}[a-z]{2,}');
        if (NAME_REGEX.test(firstName))
        this._firstName=firstName;
        else 
        throw 'Invalid first name';
    }
    /// Getter and Setter for the last name
    get lastName() {return this._lastName;}
    set lastName(lastName)
    {
        let NAME_REGEX= RegExp('^[A-Z]{1}[a-z]{2,}');
        if (NAME_REGEX.test(lastName))
        this._lastName=lastName;
        else 
        throw 'Invalid last name';
    }
    /// Getter and Setter for the address
    get address(){return this._address;}
    set address(address)
    {
        let ADDRESS_REGEX = RegExp('^[A-Z]{1}[0-9-A-Za-z]{3,}$');
        if(ADDRESS_REGEX.test(address))
        this._address = address;
        else 
        throw 'Invalid Address';
    }
    /// Getter and Setter for the city
    get city(){ return this._city;}
    set city(city)
    {
        let CITY_REGEX = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(CITY_REGEX.test(city))
        this._city=city;
        else 
        throw 'Invalid city entry as per regular expression';
    }
    /// Getter and Setter for the state
    get state(){return this._state;}
    set state(state)
    {
        let STATE_REGEX = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(STATE_REGEX.test(state))
        this._state=state;
        else 
        throw 'Invalid state entry as per regular expression';
    }
    /// Getter and Setter for the zip
    get zip(){return this._zip;}
    set zip(zip)
    {
        let ZIP_REGEX = RegExp('^[0-9]{3}[ ]?[0-9]{3}$');
        if(ZIP_REGEX.test(zip))
        this._zip=zip;
        else 
        throw 'Invalid ZIP-CODE';
    }
    /// Getter and Setter for the phone number
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber)
    {
        let phoneRegex = RegExp('^[0-9]{10}');
        if(phoneRegex.test(phoneNumber))
        this._phoneNumber=phoneNumber;
        else 
        throw 'Invalid Phone-Number';
    }
    /// Getter and Setter for the emailId
    get emailId(){return this._emailId;}
    set emailId(emailId)
    {
        let emailRegex = RegExp('^[a-zA-Z0-9]+([+-_.][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]+([.][a-zA-Z]{2})*$');
        if(emailRegex.test(emailId))
        this._emailId=emailId;
        else 
        throw 'Invalid Email-Id';
    }
    /// Getter and Setter for the phone number
    /// Display the address book contact details
    DisplayContactDetails()
    {
        console.log(`\n First Name: ${this.firstName} ,Last Name : ${this.lastName} , Address : ${this.address}, ${this.city}  ${this.state}  ${this.zip}, Phone Number: ${this.phoneNumber},
        Email ID = ${this.emailId}`);
    }
}
/// Defining the address book instance with random details
let addressBookList = [{firstName: "Raj", lastName: "Singh", address: "Sec-1", city: "Delhi", state: "Delhi", zip: 112012, phoneNumber: 9724512445, emailId: "raj@gmail.com"},
                       {firstName: "Shikha", lastName: "Singh", address: "Sec-2", city: "Gorakhpur", state: "UttarPradesh", zip: 274306, phoneNumber: 8645512454, emailId: "shikha@gmail.com"},
                       {firstName: "Vijay", lastName: "Goyal", address: "Sec-1", city: "Delhi", state: "Delhi", zip: 110012, phoneNumber: 8795512454, emailId: "vijay@gmail.com"},
                       {firstName: "Alka", lastName: "Saini", address: "Sec-3", city: "Kanpur", state: "UttarPradesh", zip: 341012, phoneNumber: 9724512454, emailId: "alka@gmail.com"},
                       {firstName: "Shubham", lastName: "Sharma", address: "Sec-4", city: "Hisar", state: "Haryana", zip: 146112, phoneNumber: 7845412454, emailId: "shubham@gmail.com"},
                       {firstName: "Shardul", lastName: "Singh", address: "Sec-6", city: "Kurukshetra", state: "Haryana", zip: 136119, phoneNumber: 7206512454, emailId: "shardul@gmail.com"}];
/// Storing this array objects in array of objects
/// Declaring the array for the address book detail storage
let addressBookInArray = new Array();
/// Iterating through the object array
for (let i =0; i<addressBookList.length; i++)
{
    /// Keeping the contact addition of array in try catch as exception will srise in this only
    try
    {
        /// Creating an instance of Address Book with data from the object
        let addressDetails = new AddressBook(addressBookList[i].firstName, addressBookList[i].lastName, addressBookList[i].address, addressBookList[i].city, addressBookList[i].state, addressBookList[i].zip, addressBookList[i].phoneNumber, addressBookList[i].emailId);
        /// Pushing the instance in an array
        addressBookInArray.push(addressDetails);
        /// Displaying the pushed contact using the method
        addressBookInArray[i].DisplayContactDetails();
    }
    catch(error)
    {
        console.log(error);
    }
}
/// UC4 --> Searching an address book contact by using the firstname
/// Taking input as every element of the array which is instance of object class address book
function SearchName(addressBookDetail)
{
    /// Check for the first name and then return the instance of the contact detail
    if(addressBookDetail.firstName=="Shubham") 
    return addressBookDetail;
}
/// Getting the object as result of the query
let searchResult = addressBookInArray.find(SearchName);
/// Finding the index in the array so as to edit at that place
let indexOfContact = addressBookInArray.indexOf(searchResult);
/// Printing the contact details before updating the detail
console.log("Result after searching -->");  
addressBookInArray[indexOfContact].DisplayContactDetails();
/// Updating the contact details of the found contact
addressBookInArray[indexOfContact].zip = 125005;
/// Printing the contact details after updating the detail
console.log("Result after updating the contact details -->");  
addressBookInArray[indexOfContact].DisplayContactDetails();

/// UC5 --> Find the contact stored inside the address book and delete it from the address book array
/// Getting the object as result of the query
let searchResultForDelete = addressBookInArray.find(SearchName);
/// Finding the index in the array so as to edit at that place
let indexOfContactForDelete = addressBookInArray.indexOf(searchResultForDelete);
/// Printing the contact details before updating the detail
console.log("Result after searching -->");  
addressBookInArray[indexOfContactForDelete].DisplayContactDetails();
console.log(addressBookInArray[indexOfContactForDelete].firstName + " " + addressBookInArray[indexOfContactForDelete].lastName +" will be deleted...");
/// Delete one element from the array at result Index
addressBookInArray.splice(indexOfContactForDelete, 1);
/// Printing the contact details after deleting the detail
console.log("Result after deleting the contact details -->");  
console.log(addressBookInArray);

/// UC6 --> Finding the number of contacts in the address book
let countOfContacts = 0;
function GetCount(addressBook)
{
    /// Increment the count of contacts if the element is not null
   if(addressBook!=null)
       ++countOfContacts;
   return countOfContacts;
}
/// Using reduce function to count the number of details stored in the address book
console.log("Total number of count of contacts in address book : " + addressBookInArray.reduce(GetCount, 1));

/// UC7 --> Check whether duplicate of a contact exists or not
/// Initial counter for the contact detail iteration
let count = 0;
/// Callback Function to return the count of the contact in the address book
function CheckForDuplicate(addressBook)
{
    /// Match condition for the first name of the contact details
    /// Incrementing the count in case the contact is found
    if(addressBook.firstName == "Tina")
        ++count;
    return count;
}
/// Using filter to check for the count of the contact present in the address book
let countOfContactsForCheck = addressBookInArray.filter(CheckForDuplicate);
/// Check for the specific condition and display the result associated with it
if(count == 1)
    console.log("No Duplicate entry for this Name.");
else if(count>1)
    console.log("Duplicate entry for this Name.");
else
    console.log("There is no entry for the name.");

/// UC8 --> Ability to check for the contact of a particular state or city
/// Getting the contact records from the address book for city say "Delhi" using the filter helper function and arrow function
let contactOfCity =  addressBookInArray.filter(addressBook => addressBook.city.includes("Delhi"));
console.log("Contacts for city are -->  ");
/// Printing the retrieved contact using the member method of the address book
contactOfCity.forEach(contact => contact.DisplayContactDetails());
/// Getting the contact records from the address book for state say "UttarPradesh" using the filter helper function and arrow function
let contactOfState =  addressBookInArray.filter(addressBook => addressBook.state.includes("UttarPradesh"));
console.log("Contacts for state are -->  ");
/// Printing the retrieved contact using the member method of the address book
contactOfState.forEach(contact => contact.DisplayContactDetails());

/// UC9 --> Ability to get the name in the record of a particular state or city using map helper function from the address book array
/// Returning a mapped element of an array containing string of city/state --> FirstName LastName
function ReturnCityMap(addressBook)
{
    return addressBook.city + " --> " + addressBook.firstName + "  " + addressBook.lastName;
}
/// Using the map helper function to get the state or city with name of contact from the address book
let addressCityMap= addressBookInArray.map(ReturnCityMap);
/// Displaying the array returned after the use of the map helper function
console.log("Displaying the name of the contact and their city -->");
/// Printing the array result of map
console.log(addressCityMap);
/// Returning a mapped element of an array containing string of city/state --> FirstName LastName
function ReturnStateMap(addressBook)
{
    return addressBook.state + " -> " + addressBook.firstName + "  " + addressBook.lastName;
}
/// Using the map helper function to get the state or city with name of contact from the address book
let addressStateMap= addressBookInArray.map(ReturnStateMap);
/// Displaying the array returned after the use of the map helper function
console.log("Displaying the name of the contact and their state -->");
/// Printing the array result of map
console.log(addressStateMap);

/// UC10 --> Get count of contact records by city or state
function ReturnState(addressBook)
{
    return addressBook.state;
}
let state = addressBookInArray.map(ReturnState);
let distinctState = [...new Set(state)];
console.log(distinctState);
/// Callback Function to return the count of the contact in the address book
function CountForState(elementState)
{
    /// Initial counter for the contact detail iteration
    let stateCounter = 0;
    /// Incrementing the state counter for the distinct State
    for(let i=0; i < addressStateMap.length; i++)
    {
        if(addressStateMap[i].includes(elementState))
        ++stateCounter;
    }
    return elementState + "-->" + stateCounter;
}
/// Using the map helper function to get the count of contact in a state
let stateCountMap= distinctState.map(CountForState);
/// Displaying the array returned after the use of the map helper function
console.log("Displaying the count of contact in a state -->");
/// Printing the array result of count map
console.log(stateCountMap);

/// Count for city
function ReturnCity(addressBook)
{
    return addressBook.city;
}
let cityList = addressBookInArray.map(ReturnCity);
let distinctCity = [...new Set(cityList)];
console.log(distinctCity);
/// Callback Function to return the count of the contact in the address book
function CountForCity(elementCity)
{
    /// Initial counter for the contact detail iteration
    let cityCounter = 0;
    /// Incrementing the city counter for the distinct city
    for(let j=0; j < addressCityMap.length; j++)
    {
        if(addressCityMap[j].includes(elementCity))
        ++cityCounter;
    }
    return elementCity + "-->" + cityCounter;
}
/// Using the map helper function to get the count of contact in a city
let cityCountMap= distinctCity.map(CountForCity);
/// Displaying the array returned after the use of the map helper function
console.log("Displaying the count of contact in a city -->");
/// Printing the array result of count for city map
console.log(cityCountMap);
