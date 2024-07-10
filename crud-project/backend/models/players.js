const conn = require('../config/db');

const Player = {
    create: (data, callback) =>{
        const query = 'INSERT INTO palyers (name, age, position, strength, team) VALUES (?, ?, ?, ?, ?)';
        conn.query(query, [data.name, data.age, data.position, data.strength, data.team], (err, result) => {
            if (err){
                return callback(err);
            }
            callback(null, result);
        });
    },

}

module.exports = Player;