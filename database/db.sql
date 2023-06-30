-- to create a new database
CREATE DATABASE clientsdb;

-- to use database
use clientsdb;

-- creating a new table
CREATE TABLE client (
  idclient INT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  dni VARCHAR(50),
  phone VARCHAR(15),
  email VARCHAR(80),
  status VARCHAR(30),
  idclientType INT(6),
  PRIMARY KEY (`idclient`)
);

CREATE TABLE clientType (
  idclientType INT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  datail VARCHAR(50),
  PRIMARY KEY (`idclientType`)
);

-- to show all tables
show tables;

-- to describe table
describe client;
describe clientType;

drop table client;