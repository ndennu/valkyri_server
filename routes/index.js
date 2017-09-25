module.exports = (api) => {
    api.use('/auth', require('./auth')(api));
    api.use('/users', require('./users')(api));
    api.use('/access', require('./access')(api));
    api.use('/places', require('./places')(api));
    api.use('/levels', require('./levels')(api));
    api.use('/histories', require('./histories')(api));
    api.use('/faces', require('./faces')(api));
};