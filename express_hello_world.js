const express = require('express');
const app = express();

app.get('/',(req,res) => { 
    res.send("Hello World using express");
});

app.listen(8089, () => { 
    console.log("Listening to port 8089 at localhost");
});