import Promise from 'bluebird';
let superManagerId = 1, managerId = 2;
module.exports.managers = [{
    id: superManagerId,
    email: 'superManager@nownews.com',
    password: 'superManager',
    role: 'SYSTEM',
    username: 'SuperManager',
}, {
    id: managerId,
    email: 'manager@nownews.com',
    password: 'manager',
    role: 'MANAGER',
    username: 'manager',
}, ];

module.exports.versions = [{
    deviceType: 'BOX',
    publishedDate: '2016-12-01',
    version: '0.0.1',
    createdBy: superManagerId,
    updatedBy: superManagerId,
}, {
    deviceType: 'IOS',
    publishedDate: '2016-12-01',
    version: '0.0.1',
    createdBy: superManagerId,
    updatedBy: superManagerId,
}, {
    deviceType: 'ANDROID',
    publishedDate: '2016-12-01',
    version: '0.0.1',
    createdBy: superManagerId,
    updatedBy: superManagerId,
}];
