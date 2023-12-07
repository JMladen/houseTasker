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
        "residents" : home.residents,
        "weeks" : []
    }

    homes.push(newHome)
    fs.writeFileSync('./storage/homes.json', JSON.stringify(homes))

    res.send(newHome).status(200)
})

app.post('/:address', (req,res) => {

    const newWeek = req.body

    console.log(homes[0].address, req.params.address, req.body)
    const home = homes.find(home => home.address === req.params.address)
    let weeks = home.weeks
    
    weeks.push(newWeek)
    home.weeks = weeks
    console.log(home)

    for (let i = 0 ; i < homes.length ; i++){
        if (homes[i].address === req.params.address){
            homes.splice(i, 1, home)
        }
    }

    fs.writeFileSync('./storage/homes.json', JSON.stringify(homes))

    res.send(home).status(200)

})

app.get('/:address', (req, res) => {
    const home = homes.find(home => home.address === req.params.address)
    res.send(home).status(200)
})

app.listen(5000, console.log("running on port 5000 ----------------------------------------------------------------------------------------------------------------"))