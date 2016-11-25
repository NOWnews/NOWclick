import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

let {
    database,
    username,
    password,
    options,
    isForcingMigrate
} = config.db;
let sequelize = new Sequelize(database, username, password, options);
let db = {};

fs.readdirSync(__dirname)
.filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
})
.forEach((file) => {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

(async () => {
    try {
        if (isForcingMigrate) {
            await sequelize.query(`DROP DATABASE IF EXISTS ${database};`);
            await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${database} CHARACTER SET utf8 COLLATE utf8_unicode_ci;`);
            await sequelize.query(`USE ${database};`);
        }
        await sequelize.sync();
    } catch (e) {
        console.error(e);
    }
})();

module.exports = db;
