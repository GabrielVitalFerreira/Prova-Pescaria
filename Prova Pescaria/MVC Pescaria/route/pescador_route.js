const express = require('express')
const router = express.Router()

const pescador_controll = require('../controll/pescador_controll.js')
router.get('/pesca/pescador', pescador_controll.all)
router.get('/pesca/pescador/:id', pescador_controll.get_id)
router.post('/pesca/create',pescador_controll.add_pescador)
router.delete('/pesca/delete/:id', pescador_controll.delete_pescador)
router.put('/pesca/update', pescador_controll.update_pescador)
module.exports = router