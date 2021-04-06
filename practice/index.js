
const express = require('express');
const routes = require('./router/routes');
app = express();


// app.get("/",(req,res,next) => {
//     console.log('started');
//     res.end('<h1>Hello, World!</h1> \n');
// })


app.use("/",routes);

app.listen(8000);