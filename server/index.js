const dataService = require('./service/dataservice')

const cors = require("cors")

const express = require("express")

const app = express()

app.use(cors({ origin: 'http://localhost:4200' }))

app.use(express.json())



// register - post
app.post('/register', (req, res) => {

    dataService.register(req.body.uname, req.body.acno, req.body.pasw).then(result => {

        //convert object to json and send as response
        res.status(result.statusCode).json(result)

    })


})


//login
app.post('/login', (req, res) => {

    dataService.login(req.body.email, req.body.pasw).then(result => {

        //convert object to json and send as response
        res.status(result.statusCode).json(result)

    })

    // console.log(req.body);
    // res.send('success')

})

app.get('/carData', (req, res) => {

    dataService.carData().then(result => {
        res.status(result.statuscode).json(result)
    })
})

app.post('/carDetails', (req, res) => {
    dataService.carDetails(req.body.carId).then(result => {
        res.status(result.statuscode).json(result)
    })
})

app.post('/rentCar', (req, res) => {
    dataService.rentCar(req.body.email, req.body.carData).then(result => {
        res.status(result.statuscode).json(result)
    })
})

app.post('/rentedList', (req, res) => {
    dataService.rentedList(req.body.email).then(result => {
        res.status(result.statuscode).json(result)
    })
})


app.listen(3000, () => { console.log("server started at port number 3000"); })