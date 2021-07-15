const path= require('path');
const express = require('express')
const app= express()

module.exports= {
    about : (req,res) =>res.sendFile(path.join(__dirname,'../','views','about.html'))
}