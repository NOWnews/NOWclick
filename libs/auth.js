import crypto from 'crypto';

module.exports.getHashedPassword = (password, salt = null) => {
    if (!salt) {
        salt = crypto.randomBytes(6).toString('base64');
    }
    let hmac = crypto.createHmac('sha1', salt);
    hmac.end(password);
    let hex = hmac.read().toString('hex');
    return `${salt}$${hex}`;
};

module.exports.checkPassword = (dbHashedPassword, password) => {
    let _ref = dbHashedPassword.split('$');
    let salt = _ref[0];
    let hashedPassword = this.getHashedPassword(password, salt);
    return (hashedPassword === dbHashedPassword);
};
