/* jshint esversion:6*/

let employees = [];

function Employee(name, title, salary, status = "fulltime"){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function(){
        console.log(`name: ${name},\t Pos: ${title}\t, Salary": ${salary},\t Status: ${status}`);
    };
    employees.push(this);
}
let jane = new Employee("Jane", "receptionist", "5k");
let joe = new Employee("Joe", "Maintenance", "3k", "part-time");
let chris = new Employee("Chris", "Boss", "1 mil");


jane.printEmployeeForm();
joe.printEmployeeForm();
chris.printEmployeeForm();

console.log(employees);
