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


if (isForcingMigrate) {
    (async() => {
        try {
            await sequelize.sync({
                force: isForcingMigrate,
            });
        } catch (e) {
            console.error(e);
        }
    })();
}

module.exports = db;
