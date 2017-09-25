module.exports = (api) => {
    return {
        login: require('./login')(api),
        logout: require('./logout')(api),
        logoutAllInstance: require('./logoutAllIntance')(api),
        removeAllTokenOfUser: require('./removeAllTokenOfUser')(api)
    };
};