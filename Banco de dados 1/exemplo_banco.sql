create table usuarios 
(
  id int AUTO_INCREMENT PRIMARY key,
  nome varchar(40),
  email varchar(40),
  senha varchar(32)
)

create table comentarios
(
  id int AUTO_INCREMENT PRIMARY key,
  comentarios varchar(400),
  dia date,
  horario varchar(5),
  fk_id_usuario int,
  FOREIGN key(fk_id_usuario) REFERENCES usuarios(id)
)