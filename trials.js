// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([
    ['home', '510-867-5309'],
    ['mobile', '415-555-1212'],
    ['business', '415-123-4567']
    ]);

// Add some phone numbers to our map



// ///////////////////////////////////////////////////////
// Create User Info Display:
function userInfo(name, number, businessName) {
    console.log(`Account Holder Name: ${name}`);
    console.log(`Account Holder Number: ${number}`);
    console.log(`Business Name: ${businessName}`);
}

// had error when used double quotes instead of single quotes
userInfo("Balloonicorn", 123456, 'Balloonicorn’s Cupcake Shop')
// Add function to print account information

function showAddresses(addresses) {

    console.log('Addresses:');
    for (let address of addresses) {
        console.log(address)
    }
}

showAddresses(['123 Sutter Street', '683 Sutter Street', '1600 Pennsylvania Ave'])
// Add function to print all addresses, including a header

// ??? when used `${phoneNumbers}, printed object??, when used console.log(phoneNumbers), printed map
function showPhones(phoneNumbers) {
    console.log('Phone Numbers: ')
    for (let [k, v] of phoneNumbers) {
        console.log(`${k} : ${v}`)
    }
}

showPhones(phoneNumbers)
// Add function to print phone types and numbers


// ///////////////////////////////////////////////////////
// Transactions:

// Create a map of transactions

let transactions = new Map([
    ['May-2', -500],
    ['May-13', 1200],
    ['May-15', -100],
    ['May-21', -359],
    ['May-29', 2200]
    ])



// Add function to add transactions

function addTransaction(transactionLog, date, amount){
    transactionLog.set(date, amount)
    return transactionLog
}

console.log(addTransaction(transactions, 'may-30', 100))
// Add function to show balance status
function showBalanceStatus(balance) {
    console.log(`Balance: ${balance}`)
    if (balance < 0){
        console.log("YOU ARE OVERDRAWN");
    }
    else if(balance >= 0 && balance < 20){
        console.log("Warning: You are close to zero balance");
    }
    else{
        console.log("Thank you for your business");
    }
}

showBalanceStatus(50)

// Add function to show transactions

function showTransactions(transactions, balance) {
    console.log(balance);


    for (let [k, v] of transactions){
        console.log(k);
        if ( v > 0 ){
            console.log('deposit');
        } else {
            console.log('withdrawal');
        }
        console.log(v);
        // left off here - need to make finalBalance not always pull from balance
        balance = balance + v
        // finalBalance = finalBalance + v;
        console.log(balance);
    }
}

showTransactions(transactions, 500)
// ///////////////////////////////////////////////////////
// All Customer Info:

// Make a Map of customer info


// Function to add customer attributes


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week


// Add a function for weekly hours






