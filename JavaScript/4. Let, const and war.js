const accountId = 144553;
let accountEmail = "pawan@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";  // this is not good way to declare variable
let accountState;

// changing here
accountId = 2;     // not allowed

accountEmail = "pw@pw.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);
// Result: 144553

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table ([accountId, accountEmail, accountPassword, accountCity, accountState]); // wll Print in table format

// result: 
// ┌─────────┬─────────────┐
// │ (index) │ Values      │
// ├─────────┼─────────────┤
// │ 0       │ 144553      │
// │ 1       │ 'pw@pw.com' │
// │ 2       │ '21212121'  │
// │ 3       │ 'Bengaluru' │
// │ 4       │ undefined   │
// └─────────┴─────────────┘