import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import initData from './initData';

const env = process.env.NODE_ENV;

let { database, username, password, options, resetDB } = config.db;
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

        if (resetDB && env === 'dev') {
            await sequelize.query(`DROP DATABASE IF EXISTS ${database};`);
            await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${database} CHARACTER SET utf8 COLLATE utf8_unicode_ci;`);
            await sequelize.query(`USE ${database};`);
        }
        await sequelize.sync();


        let { superManager, manager, versions } = initData;

        // initDefaultData
        await db.Manager.findOrCreate({
            defaults: superManager,
            where: {
                email: superManager.email,
            },
        });

        if (!resetDB) {
            return;
        }
        // fakeData
        await db.Manager.create(manager);
        await db.Version.bulkCreate(versions);

    } catch (e) {
        console.error(e);
    }
})();


module.exports = db;
