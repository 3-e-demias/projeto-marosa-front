create database marosa_bd;
use marosa_bd;

create table categorias(
	id int unsigned auto_increment primary key,
    nome varchar(50)
);

create table produtos(
	id int unsigned auto_increment,
    nome_produto varchar(40),
	descricao varchar(255),
	categoria_produto int unsigned not null,
	preco int,
    primary key(id),
    foreign key (categoria_produto) references categorias(id)
);

select * from categorias;

insert into categorias (nome) values ('Limpeza');
insert into categorias (nome) values ('Decoração');
insert into categorias (nome) values ('Organização');
insert into categorias (nome) values ('Lençois');

select * from produtos;