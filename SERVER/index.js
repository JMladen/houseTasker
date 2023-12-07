const fs = require("fs")
const express = require('express')
const app = express()
const cors = require('cors')
let homes = require('./storage/homes.json')

app.use(cors())
app.use(express.json())

app.post('/', (req,res) => {

    const home = req.body

    const newHome =     {
        "address" : home.address,
        "humans" : ["jon", "jill", "mark"],
        "schedule" : {
            "monday" : home.monday,
            "tuesday" : home.tuesday,
            "wednesday" : home.wednesday,
            "thursday" : home.thursday,
            "friday" : home.friday,
            "saturday" : home.saturday,
            "sunday" : home.sunday
        }
    }

    homes.push(newHome)
    fs.writeFileSync('./storage/homes.json', JSON.stringify(homes))
})

app.get('/:address', (req, res) => {
    const home = homes.find(home => home.address === req.params.address)
    res.send(home)
})

app.listen(5000, console.log("running on port 5000 ----------------------------------------------------------------------------------------------------------------"))