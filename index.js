const inquirer = require('inquirer')
const fs = require('fs')
const mysql = require('mysql')
const server = mysql.createConnection({

    host: 'localhost',
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: 'root',
    // Your password
    password: 'Lleuqram$45',
    database: 'employee_trackerDB',

})
// startProgram()
function startProgram(){
    inquirer.prompt([
        {
            type:'list',
            message:'What would you like to do?',
            choices:['Veiw All Employee','Veiw All Employees by Department','Veiw All Employees by Manager','Add Employees','Remove Employee','Update Employee Role','Update Employee Manager'],
            name:'startQ'
    }
]).then((response) => {
    

})
}

function viewAllEmployees(){

   let query = 'select employee_ID,first_name,last_name,role_TITLE,department_NAME,role_SALERY from employees inner join roles on employees.role_ID = roles.role_ID inner join departments on departments.department_ID = roles.department_ID; ';
    
    server.query(query, (err, res) => {
            if (err) throw err;
            console.table(res)
        })
   
}
function viewAllEmpByManagaer(){}
addEmployee()
function addEmployee(){
    let query = 'select * from employees'
    

    server.query(query, (err, res) => {
            if (err) throw err;
            console.table(res)
        })
    inquirer.prompt([
        {
            type:"input",
            message:"what is the name of the employee"
        }
    ])
}
