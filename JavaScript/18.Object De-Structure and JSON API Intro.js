//+++++++++++++++++++++ De-Structuring of Objects +++++++++++++++++++++++++
// de-structuring array ki bhi hoti hai or Objects ki bhi hoti hai hai

const course = {
    coursename: 'JS in Hindi', 
    price: '999', 
    courseInstructor: 'Hitesh'
}

//==> here TWO ways to access object
// 1st:
console.log(course.courseInstructor)  //Output: Hitesh   // this is perfect way to print buy to print multiple time you have right multiple time which not good (clean code)

// 2nd: (this is actually De-Structuring Concept)
const {courseInstructor} = course // SYNTAX**       //this make looks code more clean 
console.log(courseInstructor)    //Output: Hitesh

const {courseInstructor: Instructor} = course // SYNTAX**       // here property name (courseInstructor) renamed to (Instructor)
console.log(Instructor)    //Output: Hitesh       // as property name renamed above to (Instructor), so we can print by this new name(Instructor) and will get same value

//-------------------------------------------------------------------------------------------------------------------------

// JSON FORMAT API LOOKS IN TWO WAYS:

//==> 1st:
{
    "name": "hitesh",                   //remember JSON API's keys(property name) are written in string("") and covered under object only symbol{}, not declared variable exit.
    "coursename": "js in hindi", 
    "price": "free"
}

//==> 2nd:  sometime API comes in Array form with many inside Objects (this is also JSON FORMAT API)
[
    {},
    {},
    {}
]

//==> NOTE: (randomuserme api) is most famous on google and here is link(https://randomuser.me/api/) and to understand this API most people use (JSON FORMATTER TOOL) and here is link of TOOL(https://jsonformatter.org/)...this tool can convert API into CODE, FORM, TEXT, TREE, VIEW... to understand better

// THIS IS (randomuserme API):
{"results":[{"gender":"female","name":{"title":"Mrs","first":"Mestan","last":"Erberk"},"location":{"street":{"number":6145,"name":"Istiklal Cd"},"city":"Kahramanmaraş","state":"Bayburt","country":"Turkey","postcode":98104,"coordinates":{"latitude":"69.4328","longitude":"155.2212"},"timezone":{"offset":"0:00","description":"Western Europe Time, London, Lisbon, Casablanca"}},"email":"mestan.erberk@example.com","login":{"uuid":"95a7979d-f006-4048-9743-ff44677b9865","username":"brownzebra970","password":"dolemite","salt":"acxdsI1C","md5":"e9d8b3ca71e34e344c2b90d152c6a918","sha1":"8e656b04a454fc26d4ffa56f65dd46db9f4f2157","sha256":"a4c9aa23bdf992d65b0e066937e7cf502f4602d45d7e353d71a3c2ea80b83fd6"},"dob":{"date":"1961-05-07T05:47:57.379Z","age":64},"registered":{"date":"2007-04-23T13:12:26.333Z","age":18},"phone":"(447)-553-3316","cell":"(100)-520-8663","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/38.jpg","medium":"https://randomuser.me/api/portraits/med/women/38.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/38.jpg"},"nat":"TR"}],"info":{"seed":"6ee77f35771c2057","results":1,"page":1,"version":"1.4"}}
