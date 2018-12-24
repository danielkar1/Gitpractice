const express = require('express')
const path = require('path')



const app = express()

app.use('/', api)


const port = 3000
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})