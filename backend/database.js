const mongoose = require('mongoose');
const connection = "mongodb+srv://MyMongoDBUser:fishbowl1234@fishbowl.a0sim.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
