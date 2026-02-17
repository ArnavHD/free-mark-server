const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Your job server is jobbing..');
})


app.listen(port, ()=>{
    console.log(`Job server is running on port: ${port}`); 
})