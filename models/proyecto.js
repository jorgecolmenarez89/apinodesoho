module.exports = class Proyectos {
    constructor() {}
    cargarProyectos() {
        return new Promise(function(resolve, reject) {
            var connection = require('./database');
            var query_str = "SELECT * FROM proyectos;";
            var query_var = [];
            connection.query(query_str, query_var, function(err, results) {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
};