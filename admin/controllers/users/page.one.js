
module.exports = async (req, res, next) => {

    try{
        let result = await new Promise((resolve, reject) => {
            return resolve('controllers/users/page.one.js');
        });

        console.log(result);
        return res.render('users/one.html');
    }
    catch(err) {
        return next(err);
    }
};