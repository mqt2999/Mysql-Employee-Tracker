drop database if exists employee_trackerDB;
create database employee_trackerDB;
use employee_trackerDB;

create table departments (
 department_ID int not null,
 department_NAME varchar (20) not null,
 primary key (department_ID)
);

create table roles (
role_ID int not null primary key,
role_TITLE varchar(40) not null,
role_SALERY decimal(10,2) not null,
department_ID int not null,
index `depart_id`(department_ID),
constraint `fk_role_departmentID`
FOREIGN KEY (department_ID) REFERENCES departments(department_ID) 
on update cascade
);

create table employee (
employee_ID int primary key auto_increment null,
first_name varchar(40),
last_name varchar(40),
manager_ID int null,
index `manager_ID`(manager_ID),
constraint `fk_employee_managerID` foreign key (manager_ID) references employee(employee_ID) ,
role_ID int not null,
index `role_id`(role_ID),
constraint `fk_employee_roleID` foreign key (role_ID) references roles(role_ID)
);

SELECT * FROM Employee_Trackerdb.departments;
SELECT * FROM Employee_Trackerdb.employees;
SELECT * FROM Employee_Trackerdb.roles;

insert into employees(first_name,last_name,manager_ID,role_ID)
values(9,"james","white",35,7);
update employees set employee_ID= 9 where first_name = "james";

delete from employees where employee_ID=10;
select first_name,last_name,department_NAME from employees inner join roles on roles.role_ID = employees.role_ID inner join departments on roles.department_ID = departments.department_ID;
