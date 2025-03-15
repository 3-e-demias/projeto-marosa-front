create database marosa_bd;
use marosa_bd;


create table produtos(
	id int unsigned auto_increment,
    Nome_produto varchar(40),
	Descrição varchar(255),
	categoria_produto varchar(30),
	Preco int,
    primary key(id)
);
