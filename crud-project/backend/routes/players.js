const express = require('express');
const router = express.Router();
const Player = require('../models/players');

router.post('/addPlayer', (req, res) => {
    const data = req.body;
    Player.create(data, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
          }
          res.status(201).json({ message: 'Jogador criado com sucesso!', data: result });
    })
});

router.get('/players', (req, res) => {
    const data = req.body;
    Player.read(data, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
          }
          res.status(200).json({ message: 'Jogadores carregados com sucesso', data: result });
    })
});

module.exports = router;