
module.exports = async (req, res, next) => {

    try{
        let result = await new Promise((resolve, reject) => {
            return resolve('controllers/devices/page.list.js');
        });

        console.log(result);
        return res.render('devices/list.html');
    }
    catch(err) {
        return next(err);
    }
};