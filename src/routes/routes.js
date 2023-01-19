const ControllerGame = require('../api/controllers/ControllerGame.js')
const express = require('express')
const router = express.Router()

router.get('/games-imagens', (req, res) => {
    ControllerGame.getGamesControl()
        .then(result =>{
            res.json(result)
        })
        .catch(error =>{
            console.log(error)
        })
})
module.exports = router
