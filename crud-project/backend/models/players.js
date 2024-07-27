const { pool } = require('../config/db');

const Player = {
    create: async (data, callback) =>{
        const query = 'INSERT INTO players (name, age, position, strength, team, side, star) VALUES (?, ?, ?, ?, ?, ?, ?)';
        try {
            const conn = await pool.getConnection();
            const [result] = await conn.query(query, [data.name, data.age, data.position, data.strength, data.team, data.side, data.star]);
            conn.release();
            callback(null, result);
        } catch (err) {
            callback(err);
        }
    },

    read: async (callback) => {
        const query = 'SELECT * FROM players';
        try {
            const conn = await pool.getConnection();
            const [result] = await conn.query(query);
            conn.release();
            if (typeof callback === 'function') {
                callback(null, result);
            }
        } catch (err) {
            if (typeof callback === 'function') {
                callback(err);
            }
        }
    },
};

module.exports = Player;