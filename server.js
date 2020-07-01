const express = require('express');
const path =require('path');


const app =express();
app.get('/',function(req,res){
  res.sendfile(path.join(__dirname,'/index.html'));
})
app.get('/',function(req,res){
  res.sendfile(path.join(__dirname,'/aboutus.html'));
})
app.listen(3000);
