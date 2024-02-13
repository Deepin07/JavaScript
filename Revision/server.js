const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    console.log('this port is working');
});

app.listen(port, () =>{
    console.log('this server is working on port 3000');
})