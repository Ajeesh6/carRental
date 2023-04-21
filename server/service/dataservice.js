const db = require('./db')

register = (uname, email, pasw) => {

  // if (acno in userDetails) {
  return db.User.findOne({ email }).then(user => {
    if (user) {
      return {
        status: false,
        message: 'user already present',
        statusCode: 401
      }
    }
    else {
      //create new user object in db
      const newuser = new db.User({
        username: uname,
        email,
        password: pasw,
        rentedList: []
      })

      //save in db
      newuser.save()

      return {
        status: true,
        message: 'register success',
        statusCode: 200
      }
    }
  })

}


login = (email, pasw) => {

  // if (acno in userDetails) {
  return db.User.findOne({ email, password: pasw }).then(user => {
    if (user) {

      currentUser = user.username
      currentEmail = user.email

      // currentAcno = acno

      // const token = jwt.sign({ currentAcno }, "supersecretkey123")



      return {
        status: true,
        message: 'login success',
        statusCode: 200,
        currentUser,
        currentEmail


      }

    }
    else {
      return {
        status: false,
        message: 'incurrect account number or password',
        statusCode: 401
      }
    }
  })



}

carData = () => {
  return db.Car.find().then(Cars => {
    if (Cars) {
      return {
        status: true,
        statuscode: 200,
        data: Cars
      }
    }
    else {
      return {
        status: false,
        statuscode: 401
      }
    }
  })
}


carDetails = (carId) => {
  return db.Car.findOne({ id: carId }).then(Cars => {
    if (Cars) {
      return {
        status: true,
        statuscode: 200,
        data: Cars
      }
    }
    else {
      return {
        status: false,
        statuscode: 401
      }
    }
  })
}

rentCar = (email, carData) => {
  return db.User.findOne({ email }).then(user => {
    if (user) {

        user.rentedList.push(carData)
        user.save()
        return {
          status: true,
          statuscode: 200,
          message: "Rent Request submitted"
        }
      
    }
    else {
      return {
        status: false,
        statuscode: 401,
        message: "error"
      }
    }

  })
}

rentedList = (email) => {
  return db.User.findOne({ email }).then(Person => {
    if (Person) {

      return {
        status: true,
        statuscode: 200,
        data: Person.rentedList
      }
    } else {
      return {
        status: false,
        statuscode: 401
      }
    }
  })
}

module.exports = {
  register, login, carData, carDetails, rentCar, rentedList
}