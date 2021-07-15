const express= require('express');
const app= express();
const port= 3000;
const path= require('path')
app.use(express.static('public'));


const indexRouter=require('./routes/index')
const aboutRouter=require('./routes/about')


app.use('/',indexRouter)
app.use('/about',aboutRouter)


app.listen(port, () => console.log("Servidor corriendo en el puerto: " + port));