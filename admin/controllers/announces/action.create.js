import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:announces:action.create');

module.exports = async (req, res, next) => {

    let { title, content, actived, startTime, endTime, type } = req.body;

    try{

        let options = {
            title,
            content,
            actived: actived ? true : false,
            startTime,
            endTime
        };

        if(type) {
            options.type = type;
        }
        debug('options = %j', options);

        // 先暫時帶入
        options.createdBy = req.session.Manager.id;
        options.updatedBy = req.session.Manager.id;

        let newAnnounce = await db.Announce.create(options);
        debug('new announce = %j', newAnnounce);

        return res.redirect('/announces');
    } catch(err) {
        return next(err);
    }
};