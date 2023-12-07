const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.post('/', (req,res) => {
    console.log("works")
    console.log(req.body)
})

app.listen(5000, console.log("running on port 5000 ----------------------------------------------------------------------------------------------------------------"))