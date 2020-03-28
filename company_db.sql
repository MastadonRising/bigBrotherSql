Drop database if exists company_db;
Create database company_db;
use company_db;
create table department(
id int not null auto_increment,
name varchar(30) null,
primary key(id)
);

create table role(
id int not null auto_increment,
title varchar(30) null,
salary decimal null,
department_id int null,
primary key(id),
CONSTRAINT fk_category
FOREIGN KEY (department_id) 
REFERENCES department(id)
);

create table employee(
id int not null auto_increment
,first_name varchar(30) null
,last_name varchar(30) null
,role_id int null
, manager_id int null
,primary key(id)
,FOREIGN KEY (role_id) 
REFERENCES role(id)
,FOREIGN KEY (manager_id) 
REFERENCES employee(id)
);


