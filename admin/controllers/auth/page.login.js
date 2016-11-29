
module.exports = async (req, res, next) => {

    try{
        let result = await new Promise((resolve, reject) => {
            return resolve('controllers/auth/page.login.js');
        });

        console.log(result);
        return res.render('auth/login.html');
    }
    catch(err) {
        return next(err);
    }
};