import Promise from 'bluebird';
let superAdminId = 1, adminId = 2;
module.exports.admins = [{
    id: superAdminId,
    email: 'superAdmin@nownews.com',
    password: 'superAdmin',
    role: 'SYSTEM',
    username: 'SuperAdmin',
}, {
    id: adminId,
    email: 'admin@nownews.com',
    password: 'admin',
    role: 'ADMIN',
    username: 'Admin',
}, ];

module.exports.versions = [{
    deviceType: 'BOX',
    publishedDate: '2016-12-01',
    version: '0.0.1',
    createdBy: superAdminId,
    updatedBy: superAdminId,
}, {
    deviceType: 'IOS',
    publishedDate: '2016-12-01',
    version: '0.0.1',
    createdBy: superAdminId,
    updatedBy: superAdminId,
}, {
    deviceType: 'ANDROID',
    publishedDate: '2016-12-01',
    version: '0.0.1',
    createdBy: superAdminId,
    updatedBy: superAdminId,
}];
