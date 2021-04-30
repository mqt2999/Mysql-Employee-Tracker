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
on update cascade on delete restrict
);

create table employee (
employee_ID int primary key auto_increment not null,
first_name varchar(40),
last_name varchar(40),
role_ID int not null,
manager_ID int null,
index `manager_ID`(manager_ID),
constraint `fk_employee_managerID` foreign key (manager_ID) references employee(employee_ID) on update cascade on delete restrict,
role_ID int not null,
index `role_id`(role_ID),
constraint `fk_employee_roleID` foreign key (role_ID) references roles(role_ID) on update cascade on delete restrict
);



