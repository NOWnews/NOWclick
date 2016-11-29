require('babel-core/register');
require('babel-polyfill');
require('../global');

const chalk = require('chalk');
const http = require('http');

const admin = require('../admin/app.js');

const env = process.env.NODE_ENV || 'dev';
const port = process.env.PORT || '10000';
admin.set('port', port);

const server = http.createServer(admin);
server.listen(port);
console.log(chalk.blue(`-------------------------------`));
console.log(chalk.blue(`Start NOWott admin`));
console.log(chalk.blue(`Listen Port ${port}`));
console.log(chalk.blue(`${env} mode`));
console.log(chalk.blue(`-------------------------------`));
