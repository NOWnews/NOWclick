
module.exports = async (req, res, next) => {

    try{
        let result = await new Promise((resolve, reject) => {
            return resolve('controllers/versions/page.one.js');
        });

        console.log(result);
        return res.render('versions/one.html');
    }
    catch(err) {
        return next(err);
    }
};