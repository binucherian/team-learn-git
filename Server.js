
var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/aboutbinu',function(req,res){
  res.sendFile(path.join(__dirname+'/aboutbinu.html'));
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});
app.get('/aboutjerry',function(req,res){
  res.sendFile(path.join(__dirname+'/aboutjerry.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});
app.get('/aboutsudheesh',function(req,res){
  res.sendFile(path.join(__dirname+'/aboutsudheesh.html'));
});

var lport = process.env.PORT || 3000;

app.listen(lport);
module.exports.getApp=app;
console.log("Running at Port 3000");