
module.exports = (req, res, next) => {
    req.session.Manager = null;
    return res.redirect('/auth/login');
};