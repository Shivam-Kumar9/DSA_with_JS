// Employee Travel Expense Reimbursement
// Merge employees with their travel expenses, calculate total expense per employee, and filter those with expenses > 1000.
// Input Data:
const employees = [
  { empId: 1, name: "Alice" },
  { empId: 2, name: "Bob" }
];

const travelExpenses = [
  { empId: 1, trip: "Conference", expense: 1200 },
  { empId: 1, trip: "Training", expense: 500 },
  { empId: 2, trip: "Workshop", expense: 700 }
];


// Expected Output:
// [
//   { name: "Alice", totalExpense: 1700 }
// ]

let   total  =  []
let  firstexpence 
let secondexpence
 travelExpenses.map(ele=>{
    if(ele.empId == 1){
      firstexpence+= ele.expense
    }
    if(ele.empId == 2){
        secondexpence+= ele.expense
      }
 })

 console.log(firstexpence , secondexpence)