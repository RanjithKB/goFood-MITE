const  express = require('express');
const connectDB = require('./db/connection');
const port=5000;
const items = require('./api/items')
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();
connectDB();

app.use(cors());
app.use(bodyparser.json())

app.get('/',(req, res) =>{
    res.send("Hello MITE")
})


app.use('/api', items);
app.listen(port, ()=>{
console.log("Listening to port", port);
})