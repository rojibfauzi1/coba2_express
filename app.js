var express = require("express");


var app = express();

app.set('port',process.env.PORT || 9999);

app.get("/",function(req,res){
	res.send("News Apps is works");
})

app.listen(app.get('port'),function(){
	console.log("Server is running in port "+app.get('port'));
});