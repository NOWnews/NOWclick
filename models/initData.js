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
        version: '0.1',
        createdBy: adminId,
        updatedBy: adminId,
    }, {
        deviceType: 'IOS',
        version: '0.1',
        createdBy: adminId,
        updatedBy: adminId,
    }, {
        deviceType: 'ANDROID',
        version: '0.1',
        createdBy: adminId,
        updatedBy: adminId,
    }, ];
}
