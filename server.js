const mongoose = require('mongoose');
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 2000;
const server = http.createServer(app);
const URI = 'mongodb+srv://pawan:pawan@cluster0.ht4y4.mongodb.net/feedbacks?retryWrites=true&w=majority'
// mongoose.connect( URI || 'mongodb://localhost/new',{
mongoose.connect( URI || 'mongodb://localhost/new',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', ()=> {
    console.log('Mongoose is connected');
});
server.listen(port, console.log(`Server is running at ${port}`));