CREATE USER "app_user"@"%" IDENTIFIED BY "app_password";
GRANT ALL PRIVILEGES ON challenge.* TO "app_user"@"%";
FLUSH PRIVILEGES;
