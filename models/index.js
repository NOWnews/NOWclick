import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import {
    admins,
    getVersions
} from './initData';

let {
    database,
    username,
    password,
    options,
    resetDB
} = config.db;
let sequelize = new Sequelize(database, username, password, options);
let db = {};

fs.readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file !== 'initData.js');
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

(async() => {
    try {
        if (resetDB) {
            await sequelize.query(`DROP DATABASE IF EXISTS ${database};`);
            await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${database} CHARACTER SET utf8 COLLATE utf8_unicode_ci;`);
            await sequelize.query(`USE ${database};`);
        }
        await sequelize.sync();
        if (!resetDB) {
            return;
        }
        let adminResults = await db.Admin.bulkCreate(admins);
        let versionData = getVersions(adminResults[0].id);
        await db.Version.bulkCreate(versionData);

    } catch (e) {
        console.error(e);
    }
})();


module.exports = db;
