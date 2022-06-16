const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    'chance': {
        'age': 29,
        'birthName': 'Chancelor',
        'location': 'America'
    },
    'brown': {
        'age': 29,
        'birthName': 'Chris',
        'location': 'America'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'location': 'unknown'
    }
}


app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) =>{
    const rappersName = req.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! you better go get it!`)
})

