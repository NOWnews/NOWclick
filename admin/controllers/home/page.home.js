import Promise from 'bluebird';

module.exports = async (req, res, next) => {

    try{
        let result = await new Promise((resolve, reject) => {
            return resolve('toooo');
        });

        console.log(result);
        return res.render('home/home.html');
    }
    catch(err) {
        return next(err);
    }
};