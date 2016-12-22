import Promise from 'bluebird';
let superManagerId = 1, managerId = 2;

module.exports.superManager = {
    id: superManagerId,
    email: 'superManager@nownews.com',
    password: 'SuperManager',
    role: 'SYSTEM',
    username: 'SuperManager',
};

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
