const fs = require("fs")
const express = require('express')
const app = express()
const cors = require('cors')
let homes = require('./storage/homes.json')

app.use(cors())
app.use(express.json())

app.post('/', (req,res) => {

    const home = req.body

    const humans = req.body.humans.map(human => {human : 0})

    const newHome =     {
        "address" : home.address,
        "humans" : humans,
        "weeks" : []
    }

    homes.push(newHome)
    fs.writeFileSync('./storage/homes.json', JSON.stringify(homes))
})


app.post('/:address', (req,res) => {

    const newWeek = req.body

    const home = homes.find(home => home.address === req.params.address)

    let weeks = home.weeks

    weeks.push(newWeek)

    home.weeks = weeks

    // home = {
    //     "address" : home.address,
    //     "humans" : [{"jon" : 0 }, {"jill" : 0}, {"mark" : 0}],
    //     "weeks" : [{
    //         "monday" : home.monday,
    //         "tuesday" : home.tuesday,
    //         "wednesday" : home.wednesday,
    //         "thursday" : home.thursday,
    //         "friday" : home.friday,
    //         "saturday" : home.saturday,
    //         "sunday" : home.sunday
    //     }]
    // }


    homes.push(newHome)
    fs.writeFileSync('./storage/homes.json', JSON.stringify(homes))
})

app.get('/:address', (req, res) => {
    const home = homes.find(home => home.address === req.params.address)
    res.send(home)
})

app.listen(5000, console.log("running on port 5000 ----------------------------------------------------------------------------------------------------------------"))