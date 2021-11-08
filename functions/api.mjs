import express from 'express'
import serverless from 'serverless-http'
import fetch from 'node-fetch'

const app = express()
const router = express.Router()

router.get('/search/:query', async (req, res) => {
    const response = await fetch(`https://jisho.org/api/v1/search/words?keyword=${req.params.query}`)
    res.json(await response.json())
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)