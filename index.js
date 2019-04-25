var express = require("express");
var bodyParser = require("body-parser");
const fs = require('fs'); 
var chunk = require('chunk-text');
const request = require("request");
var upload = require("express-fileupload");
const cfe = require('check-file-extension');


var CopyleaksCloud = require('plagiarism-checker');
var clCloud = new CopyleaksCloud();
var config = clCloud.getConfig();

var app = express();




var token = "";
var process = "";
var result="";
var status="";

var UseFileMadhlaData="";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.use(upload());

app.get("/" , function(req,res) {
	res.sendFile(__dirname + "/Index.html");
});

app.get("/Index.html" , function(req,res) {
	res.sendFile(__dirname + "/Index.html");
});

app.get("/OurCount.html" , function(req,res) {
	res.sendFile(__dirname + "/OurCount.html");
});

var outputArray1="";
var CheckPercent;

app.get("/OurCheck", function(req,res){
	res.render('Result',{Percent: CheckPercent, Chunks: outputArray1})
});


app.get("/OurCheck.html", function(req,res){
	res.sendFile(__dirname + "/OurCheck.html");
});





app.post("/OurCheck" , function(req,res) {
	var UserDBCheckText = "";





if (req.body.UserPrefrence == "Machine Learning") {
	var outputArray=[];

	fs.readFile('MachineLearning.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 
  
    // Converting Raw Buffer to text 
    // data using tostring function. 
    var MilalaData = data; 

if (req.body.checkbox == "Yes") {
	console.log("yes");
	if(req.files){
		var file = req.files.filename;
		filename = file.name;
		file.mv("./"+filename,function(err){
			if(err){
				console.log(err);
				res.send("error occured");
			}else{





				if(cfe(filename) == '.txt'){





				fs.readFile(filename,'utf-8',(err, data) => {
					if (err) throw err;

					UserDBCheckText = data;
					var out = chunk(UserDBCheckText, 21);
	var UserCheckTextArraySplitLength = out.length-1;
	var ourTextLength = MilalaData.length;
	for (var i = 0; i < UserCheckTextArraySplitLength; i++) {
		var UserString= out[i];
		var UserStringLength = UserString.length;
		for (var k = 0;k <= ourTextLength-UserStringLength; k++){
			for(var m=0; m < UserStringLength; m++){
				if(MilalaData.charAt(k+m) != UserString.charAt(m)){
					break;
				}
				if(m === UserStringLength-1){
					if(outputArray[outputArray.length-1] === UserString){
						break;
					} else{
						outputArray.push(UserString);
					}


										
				}


			}


		}


	}



console.log(outputArray.length);

if(outputArray.length>0){
	var x= (outputArray.length/(UserCheckTextArraySplitLength));
	var MyPercent = x*100;
	CheckPercent=MyPercent;
	outputArray1= outputArray.toString();
  	res.redirect("/OurCheck");
}else{
	CheckPercent =0;
	outputArray1 = "None";
	res.redirect("/OurCheck");
}



		fs.unlink(filename,function(err){
			if(err){
				console.log("Error while deleting the file "+err);
			}
		});


				});	




		}else{
				res.sendFile(__dirname + "/Failure.html");
				fs.unlink(filename,function(err){
					if(err){
					console.log("Error while deleting the file "+err);
					}
				});
		}






			}

		});

	}



}





else{
	UserDBCheckText = req.body.TextForPlagCheckfromOurDB;


    var out = chunk(UserDBCheckText, 21);
	var UserCheckTextArraySplitLength = out.length-1;
	var ourTextLength = MilalaData.length;
	for (var i = 0; i < UserCheckTextArraySplitLength; i++) {
		var UserString= out[i];
		var UserStringLength = UserString.length;
		for (var k = 0;k <= ourTextLength-UserStringLength; k++){
			for(var m=0; m < UserStringLength; m++){
				if(MilalaData.charAt(k+m) != UserString.charAt(m)){
					break;
				}
				if(m === UserStringLength-1){
					if(outputArray[outputArray.length-1] === UserString){
						break;
					} else{
						outputArray.push(UserString);
					}


										
				}


			}

		}
	}

console.log(outputArray.length);

if(outputArray.length>0){
	var x= (outputArray.length/(UserCheckTextArraySplitLength));
	var MyPercent = x*100;
	CheckPercent=MyPercent;
	outputArray1= outputArray.toString();
  	res.redirect("/OurCheck");
}else{
	CheckPercent =0;
	outputArray1 = "None";
	res.redirect("/OurCheck");
}
}	

	}); 


	}









if (req.body.UserPrefrence == "Mech") {
	var outputArray=[];

	fs.readFile('Mechanical.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 
  
    // Converting Raw Buffer to text 
    // data using tostring function. 
    var MilalaData = data; 

if (req.body.checkbox == "Yes") {
	console.log("yes");
	if(req.files){
		var file = req.files.filename;
		filename = file.name;
		file.mv("./"+filename,function(err){
			if(err){
				console.log(err);
				res.send("error occured");
			}else{





				if(cfe(filename) == '.txt'){





				fs.readFile(filename,'utf-8',(err, data) => {
					if (err) throw err;

					UserDBCheckText = data;
					var out = chunk(UserDBCheckText, 21);
	var UserCheckTextArraySplitLength = out.length-1;
	var ourTextLength = MilalaData.length;
	for (var i = 0; i < UserCheckTextArraySplitLength; i++) {
		var UserString= out[i];
		var UserStringLength = UserString.length;
		for (var k = 0;k <= ourTextLength-UserStringLength; k++){
			for(var m=0; m < UserStringLength; m++){
				if(MilalaData.charAt(k+m) != UserString.charAt(m)){
					break;
				}
				if(m === UserStringLength-1){
					if(outputArray[outputArray.length-1] === UserString){
						break;
					} else{
						outputArray.push(UserString);
					}


										
				}


			}


		}


	}



console.log(outputArray.length);

if(outputArray.length>0){
	var x= (outputArray.length/(UserCheckTextArraySplitLength));
	var MyPercent = x*100;
	CheckPercent=MyPercent;
	outputArray1= outputArray.toString();
  	res.redirect("/OurCheck");
}else{
	CheckPercent =0;
	outputArray1 = "None";
	res.redirect("/OurCheck");
}



		fs.unlink(filename,function(err){
			if(err){
				console.log("Error while deleting the file "+err);
			}
		});


				});	




		}else{
				res.sendFile(__dirname + "/Failure.html");
				fs.unlink(filename,function(err){
					if(err){
					console.log("Error while deleting the file "+err);
					}
				});
		}






			}

		});

	}



}





else{
	UserDBCheckText = req.body.TextForPlagCheckfromOurDB;


    var out = chunk(UserDBCheckText, 21);
	var UserCheckTextArraySplitLength = out.length-1;
	var ourTextLength = MilalaData.length;
	for (var i = 0; i < UserCheckTextArraySplitLength; i++) {
		var UserString= out[i];
		var UserStringLength = UserString.length;
		for (var k = 0;k <= ourTextLength-UserStringLength; k++){
			for(var m=0; m < UserStringLength; m++){
				if(MilalaData.charAt(k+m) != UserString.charAt(m)){
					break;
				}
				if(m === UserStringLength-1){
					if(outputArray[outputArray.length-1] === UserString){
						break;
					} else{
						outputArray.push(UserString);
					}


										
				}


			}

		}
	}

console.log(outputArray.length);

if(outputArray.length>0){
	var x= (outputArray.length/(UserCheckTextArraySplitLength));
	var MyPercent = x*100;
	CheckPercent=MyPercent;
	outputArray1= outputArray.toString();
  	res.redirect("/OurCheck");
}else{
	CheckPercent =0;
	outputArray1 = "None";
	res.redirect("/OurCheck");
}
}	

	}); 


	}











	if (req.body.UserPrefrence == "Extc") {
		var outputArray=[];

	fs.readFile('Extc.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 
  
    // Converting Raw Buffer to text 
    // data using tostring function. 
    var MilalaData = data; 



if (req.body.checkbox == "Yes") {
	console.log("yes");
	if(req.files){
		var file = req.files.filename;
		filename = file.name;
		file.mv("./"+filename,function(err){
			if(err){
				console.log(err);
				res.send("error occured");
			}else{




					if(cfe(filename) == '.txt'){




				fs.readFile(filename,'utf-8',(err, data) => {
					if (err) throw err;

					UserDBCheckText = data;
					var out = chunk(UserDBCheckText, 21);
	var UserCheckTextArraySplitLength = out.length-1;
	var ourTextLength = MilalaData.length;
	for (var i = 0; i < UserCheckTextArraySplitLength; i++) {
		var UserString= out[i];
		var UserStringLength = UserString.length;
		for (var k = 0;k <= ourTextLength-UserStringLength; k++){
			for(var m=0; m < UserStringLength; m++){
				if(MilalaData.charAt(k+m) != UserString.charAt(m)){
					break;
				}
				if(m === UserStringLength-1){
					if(outputArray[outputArray.length-1] === UserString){
						break;
					} else{
						outputArray.push(UserString);
					}


										
				}


			}

		}
	}

console.log(outputArray.length);

if(outputArray.length>0){
	var x= (outputArray.length/(UserCheckTextArraySplitLength));
	var MyPercent = x*100;
	CheckPercent=MyPercent;
	outputArray1= outputArray.toString();
  	res.redirect("/OurCheck");
}else{
	CheckPercent =0;
	outputArray1 = "None";
	res.redirect("/OurCheck");
}


		fs.unlink(filename,function(err){
			if(err){
				console.log("Error while deleting the file "+err);
			}
		});


				});	




				}else{
				res.sendFile(__dirname + "/Failure.html");
				fs.unlink(filename,function(err){
					if(err){
					console.log("Error while deleting the file "+err);
					}
				});
				}




			}
		});
	}

}





else{
   	var UserDBCheckText = req.body.TextForPlagCheckfromOurDB;

    var out = chunk(UserDBCheckText, 21);
	var UserCheckTextArraySplitLength = out.length-1;
	var ourTextLength = MilalaData.length;
	for (var i = 0; i < UserCheckTextArraySplitLength; i++) {
		var UserString= out[i];
		var UserStringLength = UserString.length;
		for (var k = 0;k <= ourTextLength-UserStringLength; k++){
			for(var m=0; m < UserStringLength; m++){
				if(MilalaData.charAt(k+m) != UserString.charAt(m)){
					break;
				}
				if(m === UserStringLength-1){
					if(outputArray[outputArray.length-1] === UserString){
						break;
					} else{
						outputArray.push(UserString);
					}


										
				}


			}

		}
	}

console.log(outputArray.length);

if(outputArray.length>0){
	var x= (outputArray.length/(UserCheckTextArraySplitLength));
	var MyPercent = x*100;
	CheckPercent=MyPercent;
	outputArray1= outputArray.toString();
  	res.redirect("/OurCheck");
}else{
	CheckPercent =0;
	outputArray1 = "None";
	res.redirect("/OurCheck");
}
	
}
	}); 


	}






	if (req.body.UserPrefrence == "Chem") {
		var outputArray=[];

	fs.readFile('Chemical.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 
  
    // Converting Raw Buffer to text 
    // data using tostring function. 
    var MilalaData = data; 



if (req.body.checkbox == "Yes") {
	console.log("yes");
	if(req.files){
		var file = req.files.filename;
		filename = file.name;
		file.mv("./"+filename,function(err){
			if(err){
				console.log(err);
				res.send("error occured");
			}else{



					if(cfe(filename) == '.txt'){




				fs.readFile(filename,'utf-8',(err, data) => {
					if (err) throw err;
					UserDBCheckText = data;
					var out = chunk(UserDBCheckText, 21);
	var UserCheckTextArraySplitLength = out.length-1;
	var ourTextLength = MilalaData.length;
	for (var i = 0; i < UserCheckTextArraySplitLength; i++) {
		var UserString= out[i];
		var UserStringLength = UserString.length;
		for (var k = 0;k <= ourTextLength-UserStringLength; k++){
			for(var m=0; m < UserStringLength; m++){
				if(MilalaData.charAt(k+m) != UserString.charAt(m)){
					break;
				}
				if(m === UserStringLength-1){
					if(outputArray[outputArray.length-1] === UserString){
						break;
					} else{
						outputArray.push(UserString);
					}


										
				}


			}

		}
	}

console.log(outputArray.length);

if(outputArray.length>0){
	var x= (outputArray.length/(UserCheckTextArraySplitLength));
	var MyPercent = x*100;
	CheckPercent=MyPercent;
	outputArray1= outputArray.toString();
  	res.redirect("/OurCheck");
}else{
	CheckPercent =0;
	outputArray1 = "None";
	res.redirect("/OurCheck");
}


		fs.unlink(filename,function(err){
			if(err){
				console.log("Error while deleting the file "+err);
			}
		});



				});	




				}else{
				res.sendFile(__dirname + "/Failure.html");
				fs.unlink(filename,function(err){
					if(err){
					console.log("Error while deleting the file "+err);
					}
				});
				}






			}
		});
	}

}








else{
   	var UserDBCheckText = req.body.TextForPlagCheckfromOurDB;

    var out = chunk(UserDBCheckText, 21);
	var UserCheckTextArraySplitLength = out.length-1;
	var ourTextLength = MilalaData.length;
	for (var i = 0; i < UserCheckTextArraySplitLength; i++) {
		var UserString= out[i];
		var UserStringLength = UserString.length;
		for (var k = 0;k <= ourTextLength-UserStringLength; k++){
			for(var m=0; m < UserStringLength; m++){
				if(MilalaData.charAt(k+m) != UserString.charAt(m)){
					break;
				}
				if(m === UserStringLength-1){
					if(outputArray[outputArray.length-1] === UserString){
						break;
					} else{
						outputArray.push(UserString);
					}


										
				}


			}

		}
	}

console.log(outputArray.length);

if(outputArray.length>0){
	var x= (outputArray.length/(UserCheckTextArraySplitLength));
	var MyPercent = x*100;
	CheckPercent=MyPercent;
	outputArray1= outputArray.toString();
  	res.redirect("/OurCheck");
}else{
	CheckPercent =0;
	outputArray1 = "None";
	res.redirect("/OurCheck");
}
	
}
	}); 


	}









	if (req.body.UserPrefrence == "Food") {
		var outputArray=[];

	fs.readFile('Food.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 
  
    // Converting Raw Buffer to text 
    // data using tostring function. 
    var MilalaData = data; 



if (req.body.checkbox == "Yes") {
	console.log("yes");
	if(req.files){
		var file = req.files.filename;
		filename = file.name;
		file.mv("./"+filename,function(err){
			if(err){
				console.log(err);
				res.send("error occured");
			}else{



					if(cfe(filename) == '.txt'){




				fs.readFile(filename,'utf-8',(err, data) => {
					if (err) throw err;


					UserDBCheckText = data;
					var out = chunk(UserDBCheckText, 21);
	var UserCheckTextArraySplitLength = out.length-1;
	var ourTextLength = MilalaData.length;
	for (var i = 0; i < UserCheckTextArraySplitLength; i++) {
		var UserString= out[i];
		var UserStringLength = UserString.length;
		for (var k = 0;k <= ourTextLength-UserStringLength; k++){
			for(var m=0; m < UserStringLength; m++){
				if(MilalaData.charAt(k+m) != UserString.charAt(m)){
					break;
				}
				if(m === UserStringLength-1){
					if(outputArray[outputArray.length-1] === UserString){
						break;
					} else{
						outputArray.push(UserString);
					}


										
				}


			}

		}
	}

console.log(outputArray.length);

if(outputArray.length>0){
	var x= (outputArray.length/(UserCheckTextArraySplitLength));
	var MyPercent = x*100;
	CheckPercent=MyPercent;
	outputArray1= outputArray.toString();
  	res.redirect("/OurCheck");
}else{
	CheckPercent =0;
	outputArray1 = "None";
	res.redirect("/OurCheck");
}


		fs.unlink(filename,function(err){
			if(err){
				console.log("Error while deleting the file "+err);
			}
		});


	
				});	



				}else{
				res.sendFile(__dirname + "/Failure.html");
				fs.unlink(filename,function(err){
					if(err){
					console.log("Error while deleting the file "+err);
					}
				});
				}






			}
		});
	}

}




  else{  
   	var UserDBCheckText = req.body.TextForPlagCheckfromOurDB;

    var out = chunk(UserDBCheckText, 21);
	var UserCheckTextArraySplitLength = out.length-1;
	var ourTextLength = MilalaData.length;
	for (var i = 0; i < UserCheckTextArraySplitLength; i++) {
		var UserString= out[i];
		var UserStringLength = UserString.length;
		for (var k = 0;k <= ourTextLength-UserStringLength; k++){
			for(var m=0; m < UserStringLength; m++){
				if(MilalaData.charAt(k+m) != UserString.charAt(m)){
					break;
				}
				if(m === UserStringLength-1){
					if(outputArray[outputArray.length-1] === UserString){
						break;
					} else{
						outputArray.push(UserString);
					}


										
				}


			}

		}
	}

console.log(outputArray.length);

if(outputArray.length>0){
	var x= (outputArray.length/(UserCheckTextArraySplitLength));
	var MyPercent = x*100;
	CheckPercent=MyPercent;
	outputArray1= outputArray.toString();
  	res.redirect("/OurCheck");
}else{
	CheckPercent =0;
	outputArray1 = "None";
	res.redirect("/OurCheck");
}
	
}
	}); 


	}




});







app.get("/APICheck.html" , function(req,res) {
	res.sendFile(__dirname + "/APICheck.html");
});


app.post("/APICheck" , function(req,res){
  const UserCheckText = req.body.TextForPlagCheck;
  // res.send(UserCheckText);



// Creating Access token   run this patch after every 48 hours
//   const option={
//     url:"https://api.copyleaks.com/v1/account/login-api",
//     method:"POST",
//     headers: {
//       ContentType : 'application/json',
//        Authorization:"mayureshdixit2008@gmail.com 3F09C012-4CEA-4D0A-8501-C184C8195EB3"
//     },
//     json: true,
//     body:{
//     email:"mayureshdixit2008@gmail.com",
//       apikey:"3F09C012-4CEA-4D0A-8501-C184C8195EB3",
//     },
//  
//  };
//  
//   request(option, function(error, response, body){
//   if(error){
//       console.log(error);
//       res.send("Sorry Error: "+error+" Occured");
//       }else{
//       if(response.statusCode == 200){
//        token = body.access_token;
//        console.log(token);
//  
//      }else{
//         res.sendStatus(response.statusCode);
//       }
//     };
//   });





// Creating Process id  Run to Create Process Id
  const options={
    url:"https://api.copyleaks.com/v1/businesses/create-by-text",
    method:"POST",
    headers: {
      ContentType : 'application/json',
      Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoibWF5dXJlc2hkaXhpdDIwMDhAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJjM2ZkMDI3My1lMTg3LTQ3NmQtOGU2YS00OGUwZmNiODllNDkiLCJleHAiOjE1NTYzNTA5MDUsImlzcyI6ImNvcHlsZWFrcy5jb20iLCJhdWQiOiJhcGktdjEuY29weWxlYWtzLmNvbSJ9.Z0bSBZLX4aoKCNgEZfIp3NsYolyy3W2vcrqjI5lt2BFNbhWI-zL2MUkTBBco9L6F0QRSE05qkZBB0dlzuiyBGEqzUNb814gIdG9HveFPWepNCulqGGO7I0jD_S9ugJsSKERKhfp3knjs5utcm11qFcvN_Tk0pkkhV3tdqqMcVwJPxRPeUo6MjbNgzsDjwifNO1KZPov2ll6MOdAnEjN8nJa9wh8E1jc4HF3ynM7x4StaolN0kf9XDtIooWY1B3IxyTVBhElNrzTsBLCm8UOC5hMWMoNcr6GW39VoQvBghF-mYeF0Vil8EmyXtrENmCeiEPJf4IEmu1iEAvihzwo7Ew",
    },
    json: true,
    body:UserCheckText,
  };

  request(options, function(error, response, body){
    if(error){
      console.log(error);
      res.send("Sorry Error: "+error+" Occured");
    }else{
      if(response.statusCode == 200){

       process = body.ProcessId;
       res.redirect("/status");
      }else{
        res.sendStatus(response.statusCode);
      }
    };
  });

});




app.get("/result", function(req,res){

  const option = {
    url:"https://api.copyleaks.com/v2/businesses/"+process+"/result",
    method:"GET",
    headers: {
      ContentType : 'application/json',
      Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoibWF5dXJlc2hkaXhpdDIwMDhAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJjM2ZkMDI3My1lMTg3LTQ3NmQtOGU2YS00OGUwZmNiODllNDkiLCJleHAiOjE1NTYzNTA5MDUsImlzcyI6ImNvcHlsZWFrcy5jb20iLCJhdWQiOiJhcGktdjEuY29weWxlYWtzLmNvbSJ9.Z0bSBZLX4aoKCNgEZfIp3NsYolyy3W2vcrqjI5lt2BFNbhWI-zL2MUkTBBco9L6F0QRSE05qkZBB0dlzuiyBGEqzUNb814gIdG9HveFPWepNCulqGGO7I0jD_S9ugJsSKERKhfp3knjs5utcm11qFcvN_Tk0pkkhV3tdqqMcVwJPxRPeUo6MjbNgzsDjwifNO1KZPov2ll6MOdAnEjN8nJa9wh8E1jc4HF3ynM7x4StaolN0kf9XDtIooWY1B3IxyTVBhElNrzTsBLCm8UOC5hMWMoNcr6GW39VoQvBghF-mYeF0Vil8EmyXtrENmCeiEPJf4IEmu1iEAvihzwo7Ew",
    },
  };

  request(option, function(error, response, body){
    if(error){
      console.log(error);
      res.send("Sorry Error: "+error+" Occured");
    }else{
      if(response.statusCode == 200){
      	result = JSON.parse(body);
       //console.log(result.results);


       res.send(result);



      }else{
        res.sendStatus(response.statusCode);
      }
    };
  });



});


app.get("/status", function(req,res){
//  Checking the status

  const options={
    url:"https://api.copyleaks.com/v1/businesses/"+process+"/status",
    method:"GET",
    headers: {
      ContentType : 'application/json',
      Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoibWF5dXJlc2hkaXhpdDIwMDhAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJjM2ZkMDI3My1lMTg3LTQ3NmQtOGU2YS00OGUwZmNiODllNDkiLCJleHAiOjE1NTYzNTA5MDUsImlzcyI6ImNvcHlsZWFrcy5jb20iLCJhdWQiOiJhcGktdjEuY29weWxlYWtzLmNvbSJ9.Z0bSBZLX4aoKCNgEZfIp3NsYolyy3W2vcrqjI5lt2BFNbhWI-zL2MUkTBBco9L6F0QRSE05qkZBB0dlzuiyBGEqzUNb814gIdG9HveFPWepNCulqGGO7I0jD_S9ugJsSKERKhfp3knjs5utcm11qFcvN_Tk0pkkhV3tdqqMcVwJPxRPeUo6MjbNgzsDjwifNO1KZPov2ll6MOdAnEjN8nJa9wh8E1jc4HF3ynM7x4StaolN0kf9XDtIooWY1B3IxyTVBhElNrzTsBLCm8UOC5hMWMoNcr6GW39VoQvBghF-mYeF0Vil8EmyXtrENmCeiEPJf4IEmu1iEAvihzwo7Ew",
    },
  };

  request(options, function(error, response, body){
    if(error){
      console.log(error);
      res.send("Sorry Error: "+error+" Occured");
    }else{
      if(response.statusCode == 200){
      status = JSON.parse(body);
      if(status.ProgressPercents == 100){

      		res.redirect("/result");


      }else{       res.send(body);
			}

      }else{
        res.sendStatus(response.statusCode);
      }
    };
  });
});







app.listen(3000,function() {
	console.log("Server is running on port 3000.");
});

