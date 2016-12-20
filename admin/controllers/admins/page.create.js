
module.exports = async (req, res, next) => {

    try{
        let result = await new Promise((resolve, reject) => {
            return resolve('controllers/admins/page.create.js');
        });

        console.log(result);
        return res.render('admins/create.html');
    }
    catch(err) {
        return next(err);
    }
};
