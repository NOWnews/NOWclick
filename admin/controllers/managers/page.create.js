
module.exports = async (req, res, next) => {
    try{
        return res.render('managers/create.html');
    }
    catch(err) {
        return next(err);
    }
};