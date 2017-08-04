const formRoutes = require('./formRoutes');
const kanbanRoutes = require('./kanbanRoutes');

module.exports = function(app) {
    return {
        formRoutes: formRoutes(app),
        kanbanRoutes: kanbanRoutes(app)
    };
};