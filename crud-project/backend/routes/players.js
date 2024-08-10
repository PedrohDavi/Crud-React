const express = require('express');
const router = express.Router();
const Player = require('../models/players');

router.post('/addPlayers', (req, res) => {
    const data = req.body;
    Player.create(data, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
          }
          res.status(201).json({ message: 'Jogador criado com sucesso!', data: result });
    })
});

router.get('/players', (req, res) => {
    Player.read((err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(200).json(result);
    });
});

module.exports = router;