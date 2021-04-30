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
function startProgram() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: ['Veiw All Employee', 'Veiw All Employees by Department', 'Veiw All Employees by Manager', 'Add Employees', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager'],
            name: 'startQ'
        }
    ]).then((response) => {
    })
}
function viewAllEmployees() {

    let query = 'select employee_ID,first_name,last_name,role_TITLE,department_NAME,role_SALERY from employees inner join roles on employees.role_ID = roles.role_ID inner join departments on departments.department_ID = roles.department_ID; ';

    server.query(query, (err, res) => {
        if (err) throw err;
        console.table(res)
    })

}
function viewAllEmpByManagaer(){

}
function viewAllEmpByDepartment(){
    let query = 'select first_name,last_name,department_NAME from employees inner join roles on roles.role_ID = employees.role_ID inner join departments on roles.department_ID = departments.department_ID;';

    server.query(query, (err, res) => {
        if (err) throw err;
        console.table(res)
    })
}
function addEmployee(){
    server.query('select * from roles',(err,res) => {
        if (err) throw err
        console.table(res)
    })
    let query = 'select * from employees'   

    server.query(query,(err, res) => {
            if (err) throw err;
            console.table(res)
            inquirer.prompt([
                {
                    type:"input",
                    message:"what is the employee Id?",
                    name:"emp_id"
                },
                {
                    type:"input",
                    message:"what is the employee first name?",
                    name:"emp_fName"
                },
                {
                    type:"input",
                    message:"what is the employee last name?",
                    name:"emp_lName"
                },
                {
                    type:"input",
                    message:"what is the employees role Id?",
                    name:"emp_roleid"
                },
                {
                    type:"input",
                    message:"what is the employee manager id? enter the employee number of the employees manager.",
                    name:"emp_mangid"
                }
                
            ]).then((response)=>{
                let query2 = 'insert into employees (employee_ID,first_name,last_name,role_ID,manager_ID) values (?,?,?,?,?)'
                server.query(query2, [response.emp_id,response.emp_fName,response.emp_lName,response.emp_roleid,response.emp_mangid],(err, res) => {
                    if (err) throw err;
                    console.log("employee added")
                })
            })
        })
   
}
function deleteEmployee(){
    inquirer.prompt([
        {
            type:"input",
            message:"what is the id of the employee you would like to delete?",
            name:"deleteId"
        }
    ]).then((response)=> {
        server.query('delete from employees where ?',{employee_ID: response.deleteId},(err,res) => {
            if (err) throw err
            
        })
        
        
    })

}
function updateEmployeeRole(){
    inquirer.prompt([
        {
            type:"input",
            message:"what is the id of the employee?",
            name:"empId"
        },        
        {
            type:"input",
            message:"what is the new role ID?",
            name:"updateRole"
        }        
    ]).then((response)=> {
        server.query('update employees set role_ID = ? where employee_ID = ?',[response.updateRole,response.empId],(err,res) => {
            if (err) throw err
            console.log("The employees role was updated!")
        })
        
        
    })
}

function updateEmployeeManager(){
    inquirer.prompt([
        {
            type:"input",
            message:"what is the id of the employee?",
            name:"empId"
        },        
        {
            type:"input",
            message:"what is the new manager ID?",
            name:"updateMang"
        }        
    ]).then((response)=> {
        server.query('update employees set manager_ID = ? where employee_ID = ?',[response.updateMang,response.empId],(err,res) => {
            if (err) throw err
            console.log("The employees department was updated!")
        })
        
        
    })
}