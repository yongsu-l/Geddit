// config.js

require('dotenv').config();

CONFIG = {}; 

CONFIG.port         =   process.env.PORT;

CONFIG.db_host      =   process.env.DB_HOST     || 'localhost';
CONFIG.db_port      =   process.env.DB_PORT     || '3306';
CONFIG.db_name      =   process.env.DB_NAME     || 'geddit';
CONFIG.db_user      =   process.env.DB_USER     || 'root';
CONFIG.db_password  =   process.env.DB_PASSWORD || 'password';
CONFIG.secretKey    =   "DontLookAtMe";
