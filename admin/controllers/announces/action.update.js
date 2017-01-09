import Debug from 'debug';
const debug = Debug('NOWclick-admin:controllers:announces:action.update');

module.exports = async (req, res, next) => {
    let { id } = req.params;
    let { title, content, actived, startTime, endTime } = req.body;
    debug('req.body = %j', req.body);
    try {

        let announce = await db.Announce.findById(id);

        if(!announce) {
            throw new Error('找不到 announce');
        }

        if(title) {
            announce.set('title', title);
        }

        if(content) {
            announce.set('content', content);
        }

        if(startTime) {
            announce.set('startTime', startTime);
        }

        if(endTime) {
            announce.set('endTime', endTime);
        }

        actived = actived ? true : false;
        announce.set('actived', actived);
        announce.set('updatedBy', req.session.Manager.id);

        let updatedAnnounce = await announce.save();

        return res.redirect(`/announces/${announce.id}`);
    } catch(err) {
        return next(err);
    }
};
