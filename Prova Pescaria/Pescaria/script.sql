drop database if exists Pesca;
create database Pesca;
use Pesca;

create table Pescador(
    id  integer primary key auto_increment,
    cidade varchar(100) not null,
    quantidade decimal (9,2) not null
);

insert into Pescador(cidade, quantidade) values ('Pedreira', 10), ('Santos', 50),('Campinas', 15),('Ubatuba', 200);