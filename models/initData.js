import Promise from 'bluebird';

module.exports.admins = [{
    email: 'superAdmin@nownews.com',
    password: 'superAdmin',
    role: 'SYSTEM',
    username: 'SuperAdmin',
}, {
    email: 'admin@nownews.com',
    password: 'admin',
    role: 'ADMIN',
    username: 'Admin',
}, ];

module.exports.getVersions = (adminId) => {
    return [{
        deviceType: 'BOX',
        publishedDate: '2016-12-01',
        version: '0.0.1',
        createdBy: adminId,
        updatedBy: adminId,
    }, {
        deviceType: 'IOS',
        publishedDate: '2016-12-01',
        version: '0.0.1',
        createdBy: adminId,
        updatedBy: adminId,
    }, {
        deviceType: 'ANDROID',
        publishedDate: '2016-12-01',
        version: '0.0.1',
        createdBy: adminId,
        updatedBy: adminId,
    }, ];
}
