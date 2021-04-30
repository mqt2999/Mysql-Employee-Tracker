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