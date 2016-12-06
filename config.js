
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
            database: 'NOWott',
            options: {
                host: '127.0.0.1',
                port: 3306,
                pool: {
                    max: 100,
                    min: 0,
                    idle: 10000,
                },
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
        header: header,
    },
    staging: {
        db: {
            username: 'root',
            password: 'root',
            database: 'NOWott',
            options: {
                host: '127.0.0.1',
                port: 3306,
                pool: {
                    max: 100,
                    min: 0,
                    idle: 10000,
                },
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
        header: header,
    },
    production: {
        db: {
            username: 'root',
            password: 'root',
            database: 'NOWott',
            options: {
                host: '127.0.0.1',
                port: 3306,
                pool: {
                    max: 100,
                    min: 0,
                    idle: 10000,
                },
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
        header: header,
    },
};
