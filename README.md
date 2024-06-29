Setup code
```js
npm i
```

## Create user
```
CREATE USER 'user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';
```
## If your account lock
```
ALTER USER 'user'@'localhost' ACCOUNT UNLOCK;
```
## Grant all access
```
GRANT ALL PRIVILEGES ON name_database.* TO 'username'@'localhost';
FLUSH PRIVILEGES;

or all database

GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost';
FLUSH PRIVILEGES;
```
## Check grant access
```
SHOW GRANTS FOR 'username'@'localhost';

```
or
```
SELECT 
    u.User AS 'Username',
    u.Host AS 'Host',
    d.Db AS 'Database'
FROM 
    mysql.user u
LEFT JOIN 
    mysql.db d 
ON 
    u.User = d.User AND u.Host = d.Host
WHERE
    u.User = 'username';

```
## Show user
```
SELECT User, Host FROM mysql.user;
```

## Show all databse 
```
SHOW DATABASES
```

## Create Database
```
CREATE DATABASE name_db;
```
- Use database
  ```
  USE name_db;
  ```
- Remove database
  ```
  DROP DATABASE name_db;
  ```
- Show all databse
  ```
  SHOW DATABASES;
  ```
- Show table
  ```
  SHOW TABLES;
  ```
- Describe table
  ```
  DESCRIBE name_table;
  ```

