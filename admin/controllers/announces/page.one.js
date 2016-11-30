
module.exports = async (req, res, next) => {

    try{
        let result = await new Promise((resolve, reject) => {
            return resolve('controllers/announces/one.list.js');
        });

        console.log(result);
        return res.render('announces/one.html');
    }
    catch(err) {
        return next(err);
    }
};