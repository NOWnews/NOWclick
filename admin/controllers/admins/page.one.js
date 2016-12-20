
module.exports = async (req, res, next) => {

    try{
        let result = await new Promise((resolve, reject) => {
            return resolve('controllers/admins/one.list.js');
        });

        console.log(result);
        return res.render('admins/one.html');
    }
    catch(err) {
        return next(err);
    }
};
