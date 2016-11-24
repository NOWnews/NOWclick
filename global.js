
const config = require('./config');
const env = process.env.NODE_ENV;

global.config = env ? config[env] : config['dev'];
global.rootPath = __dirname;