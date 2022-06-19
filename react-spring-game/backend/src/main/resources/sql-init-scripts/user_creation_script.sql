Delete From mysql.user WHERE user = 'wk11';
CREATE USER 'wk11'@'localhost' identified By 'wk11';
grant all privileges on * . * to 'wk11'@'localhost';
alter user 'wk11'@'localhost' identified with mysql_native_password by 'admin';