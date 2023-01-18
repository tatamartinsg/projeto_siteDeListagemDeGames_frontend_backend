const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const consign = require('consign')

const expressConfig = () => {
    const app = express()

    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());

    consign()
    .include('routes')
    .into(app)

    return app
}
module.exports = expressConfig


