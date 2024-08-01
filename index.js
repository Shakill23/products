import express from 'express'
import path from 'path'
import {config} from 'dotenv'
config()

const app = express()
const port = +process.env.PORT || 2000

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/index.html'))
})

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/about.html'))
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})