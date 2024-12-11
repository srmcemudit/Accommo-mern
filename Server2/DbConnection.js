const mongoose = require('mongoose');

var mongoURI = 'mongodb+srv://tudrishu:Mongooseid123@cluster0.vn8pr.mongodb.net/sample_mflix'


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });




connection.on('error', ()=>{
    console.log('Mongo Connection Error')
})

connection.on('connected', ()=>{
    console.log('Mongo Connection Established')
})

module.exports = mongoose