
/*
 * HTTP HEADER 欄位 key
 */
let header = {
    'X-NOWnews-API': ['NOWnewsTaiwanNumberOne']
}

module.exports = {
    dev: {
        db: {
            username: 'root',
            password: 'root',
            database: 'NOWclick',
            options: {
                host: '127.0.0.1',
                port: 3306,
                pool: {
                    max: 100,
                    min: 0,
                    idle: 10000,
                },
                dialect: 'mariadb',
                define: {
                    paranoid: true, //啟用 deletedAt
                    freezeTableName: true, //固定資料表不為複數，例如: Admin -> Admins
                    charset: 'utf8',
                    collate: 'utf8_unicode_ci',
                },
                logging: false, //看 SQL 語法
                timezone: '+08:00'
            },
            resetDB: true
        },
        /*
         * HTTP HEADER 欄位 key
         */
        header,
        superManagerId: 1,
    },
    staging: {
        db: {
            username: 'root',
            password: '5j18ru,4',
            database: 'NOWclick',
            options: {
                host: '127.0.0.1',
                port: 3306,
                pool: {
                    max: 100,
                    min: 0,
                    idle: 10000,
                },
                dialect: 'mariadb',
                define: {
                    paranoid: true, //啟用 deletedAt
                    freezeTableName: true, //固定資料表不為複數，例如: Admin -> Admins
                    charset: 'utf8',
                    collate: 'utf8_unicode_ci',
                },
                logging: false, //看 SQL 語法
                timezone: '+08:00'
            },
            resetDB: false
        },
        /*
         * HTTP HEADER 欄位 key
         */
        header,
        superManagerId: '1', //目前未知需依照實際情況
    },
    production: {
        db: {
            username: 'root',
            password: '5j18ru,4',
            database: 'NOWclick',
            options: {
                host: '127.0.0.1',
                port: 3306,
                pool: {
                    max: 100,
                    min: 0,
                    idle: 10000,
                },
                dialect: 'mariadb',
                define: {
                    paranoid: true, //啟用 deletedAt
                    freezeTableName: true, //固定資料表不為複數，例如: Admin -> Admins
                    charset: 'utf8',
                    collate: 'utf8_unicode_ci',
                },
                logging: false, //看 SQL 語法
                timezone: '+08:00'
            },
            resetDB: false
        },
        /*
         * HTTP HEADER 欄位 key
         */
        header,
        superManagerId: '1', //目前未知需依照實際情況
    },
};
