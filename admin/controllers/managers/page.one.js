
module.exports = async (req, res, next) => {

    try{
        let result = await new Promise((resolve, reject) => {
            return resolve('controllers/managers/page.one.js');
        });

        console.log(result);
        return res.render('managers/one.html');
    }
    catch(err) {
        return next(err);
    }
};