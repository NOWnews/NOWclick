import PrettyError from 'pretty-error';
let prettyError = new PrettyError();

module.exports = (app) => {

    app.use((err, req, res, next) => {
        console.log(prettyError.render(err));
        let message = (typeof err === 'string') ? err : err.message;
        return res.status(400).json({
            type: 'error',
            message,
        });
    });

    return (req, res, next) => {
        return next();
    };
};
