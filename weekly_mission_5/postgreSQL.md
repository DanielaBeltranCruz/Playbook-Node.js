# 🌟 Mini tutorial de SQL

**Objetivos de esta práctica**
+ Instalar PostgreSQL
+ Usar la línea de comando de PostgreSQL
+ Crear una base de datos desde la terminal
+ Crear un tabla desde la terminal
+ Aprender a realizar las operaciones básicas: crear, actualizar, leer y eliminar

Puedes consultar el libro <https://www.practicalsql.com/index.html>

## Instalación de PostgreSQL

1. Descarga e instala el motor de base de datos relacional PostgreSQL en tu Sistema Operativo: [descargar](https://www.postgresql.org/download/)
2. Ten en cuenta que esto puede variar según tu SO.
3. Entra a la línea de comando de tu postgresql.
4. Tendrás que hacer login del usuario que creaste en tu instalación.
   
![login](https://github.com/DanielaBeltranCruz/Playbook-Node.js/blob/main/weekly_mission_5/images/Mini%20tutorial%20SQL/01.PNG)

5. Crea tu primera base de datos: `create database launchx_nodejs;`.

![db](https://github.com/DanielaBeltranCruz/Playbook-Node.js/blob/main/weekly_mission_5/images/Mini%20tutorial%20SQL/02.PNG)

6. Seleciona la base de datos creada: `\c launchx_nodejs;`.


![db](https://github.com/DanielaBeltranCruz/Playbook-Node.js/blob/main/weekly_mission_5/images/Mini%20tutorial%20SQL/03.PNG)

7. Lista las tablas creadas: `\dt`.

![db](https://github.com/DanielaBeltranCruz/Playbook-Node.js/blob/main/weekly_mission_5/images/Mini%20tutorial%20SQL/04.PNG)

8. Crea una nueva tabla: `CREATE TABLE explorers(id bigserial, username varchar(50));`.

![table](https://github.com/DanielaBeltranCruz/Playbook-Node.js/blob/main/weekly_mission_5/images/Mini%20tutorial%20SQL/05.PNG)

9.  Vuelve a listar las tablas creadas, deberías poder ver la tabla `explorers`.

![table explorers](https://github.com/DanielaBeltranCruz/Playbook-Node.js/blob/main/weekly_mission_5/images/Mini%20tutorial%20SQL/06.PNG)

10. Agrega un nuevo registro a la tabla creada anteriormente:
```sql
insert into explorers(id, username) values (1, 'Explorer1');
```

![nuevo registro](https://github.com/DanielaBeltranCruz/Playbook-Node.js/blob/main/weekly_mission_5/images/Mini%20tutorial%20SQL/07.PNG)

11. Agrega 5 registros más siguiendo el ejemplo anterior:
```sql
insert into explorers(id, username) values (1, 'Explorer1');
insert into explorers(id, username) values (2, 'Explorer2');
insert into explorers(id, username) values (3, 'Explorer3');
insert into explorers(id, username) values (4, 'Explorer4');
insert into explorers(id, username) values (5, 'Explorer5');
```

![nuevo registro](https://github.com/DanielaBeltranCruz/Playbook-Node.js/blob/main/weekly_mission_5/images/Mini%20tutorial%20SQL/08.PNG)

12. Lee los registros de la tabla explorers: `select * from explorers;`.

![registros](https://github.com/DanielaBeltranCruz/Playbook-Node.js/blob/main/weekly_mission_5/images/Mini%20tutorial%20SQL/09.PNG)

13. Lee solo los nombres de todos los registros de la db: `select e.username from explorers e;`.

![registros db](https://github.com/DanielaBeltranCruz/Playbook-Node.js/blob/main/weekly_mission_5/images/Mini%20tutorial%20SQL/10.PNG)

14. Actualiza el valor del primer nombre del explorer con ID 1: `update explorers e set username = 'Explorer 1 Upd' where e.id = 1;`.

![actualizar](https://github.com/DanielaBeltranCruz/Playbook-Node.js/blob/main/weekly_mission_5/images/Mini%20tutorial%20SQL/11.PNG)

15. Elimina el explorer con ID 1: `delete from explorers e where e.id = 1;`.

![eliminar](https://github.com/DanielaBeltranCruz/Playbook-Node.js/blob/main/weekly_mission_5/images/Mini%20tutorial%20SQL/12.PNG)
