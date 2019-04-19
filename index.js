var express = require("express");
var bodyParser = require("body-parser");
const fs = require('fs'); 
var chunk = require('chunk-text');
const request = require("request");
var upload = require("express-fileupload");


var CopyleaksCloud = require('plagiarism-checker');
var clCloud = new CopyleaksCloud();
var config = clCloud.getConfig();

var app = express();

var token = "";
var process = "";
var result="";
var status="";

var UseFileMadhlaData="";


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




app.get("/OurCheck.html" , function(req,res) {
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
if(MyPercent >= 100){var display= "Your Text is 100% Plagiarised."; }
	else{var display= "Your Text is "+MyPercent+"% Plagiarised.";}	outputArray.toString();
	
  	res.send(display +"<br>"+"The plagiarised sentences are :- "+outputArray);
	}
else{
	res.send("Your Text is 0% Plagiarised.");
	}


		fs.unlink(filename,function(err){
			if(err){
				console.log("Error while deleting the file "+err);
			}
		});
				});	
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
if(MyPercent >= 100){var display= "Your Text is 100% Plagiarised."; }
	else{var display= "Your Text is "+MyPercent+"% Plagiarised.";}	outputArray.toString();
  	res.send(display +"<br>"+"The plagiarised sentences are :- "+outputArray);
	}
else{
	res.send("Your Text is 0% Plagiarised.");
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
if(MyPercent >= 100){var display= "Your Text is 100% Plagiarised."; }
	else{var display= "Your Text is "+MyPercent+"% Plagiarised.";}	outputArray.toString();
  	res.send(display +"<br>"+"The plagiarised sentences are :- "+outputArray);
	}
else{
	res.send("Your Text is 0% Plagiarised.");
	}


		fs.unlink(filename,function(err){
			if(err){
				console.log("Error while deleting the file "+err);
			}
		});

				});	
			}
		});
	}

}










else{
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
if(MyPercent >= 100){var display= "Your Text is 100% Plagiarised."; }
	else{var display= "Your Text is "+MyPercent+"% Plagiarised.";}	outputArray.toString();
  	res.send(display +"<br>"+"The plagiarised sentences are :- "+outputArray);
	}
else{
	res.send("Your Text is 0% Plagiarised.");
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
if(MyPercent >= 100){var display= "Your Text is 100% Plagiarised."; }
	else{var display= "Your Text is "+MyPercent+"% Plagiarised.";}	outputArray.toString();
  	res.send(display +"<br>"+"The plagiarised sentences are :- "+outputArray);
	}
else{
	res.send("Your Text is 0% Plagiarised.");
	}


		fs.unlink(filename,function(err){
			if(err){
				console.log("Error while deleting the file "+err);
			}
		});


				});	
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
if(MyPercent >= 100){var display= "Your Text is 100% Plagiarised."; }
	else{var display= "Your Text is "+MyPercent+"% Plagiarised.";}	outputArray.toString();
  	res.send(display +"<br>"+"The plagiarised sentences are :- "+outputArray);
	}
else{
	res.send("Your Text is 0% Plagiarised.");
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
if(MyPercent >= 100){var display= "Your Text is 100% Plagiarised."; }
	else{var display= "Your Text is "+MyPercent+"% Plagiarised.";}	outputArray.toString();
  	res.send(display +"<br>"+"The plagiarised sentences are :- "+outputArray);
	}
else{
	res.send("Your Text is 0% Plagiarised.");
	}


		fs.unlink(filename,function(err){
			if(err){
				console.log("Error while deleting the file "+err);
			}
		});



				});	
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
if(MyPercent >= 100){var display= "Your Text is 100% Plagiarised."; }
	else{var display= "Your Text is "+MyPercent+"% Plagiarised.";}	outputArray.toString();
  	res.send(display +"<br>"+"The plagiarised sentences are :- "+outputArray);
	}
else{
	res.send("Your Text is 0% Plagiarised.");
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
if(MyPercent >= 100){var display= "Your Text is 100% Plagiarised."; }
	else{var display= "Your Text is "+MyPercent+"% Plagiarised.";}	outputArray.toString();
  	res.send(display +"<br>"+"The plagiarised sentences are :- "+outputArray);
	}
else{
	res.send("Your Text is 0% Plagiarised.");
	}


		fs.unlink(filename,function(err){
			if(err){
				console.log("Error while deleting the file "+err);
			}
		});


	
				});	
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
if(MyPercent >= 100){var display= "Your Text is 100% Plagiarised."; }
	else{var display= "Your Text is "+MyPercent+"% Plagiarised.";}	outputArray.toString();
  	res.send(display +"<br>"+"The plagiarised sentences are :- "+outputArray);
	}
else{
	res.send("Your Text is 0% Plagiarised.");
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
 //  const option={
 //    url:"https://api.copyleaks.com/v1/account/login-api",
 //    method:"POST",
 //    headers: {
 //      ContentType : 'application/json',
 //       //Authorization:"mayureshdixit2008@gmail.com 3F09C012-4CEA-4D0A-8501-C184C8195EB3"
 //    },
 //    json: true,
 //    body:{
 //    email:"mayureshdixit2008@gmail.com",
 //      apikey:"3F09C012-4CEA-4D0A-8501-C184C8195EB3",
 //    },
//  
//  };
//  
//   request(option, function(error, response, body){
//     if(error){
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
      Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoibWF5dXJlc2hkaXhpdDIwMDhAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJjM2ZkMDI3My1lMTg3LTQ3NmQtOGU2YS00OGUwZmNiODllNDkiLCJleHAiOjE1NTU2OTk2NTQsImlzcyI6ImNvcHlsZWFrcy5jb20iLCJhdWQiOiJhcGktdjEuY29weWxlYWtzLmNvbSJ9.XSf8-TVu1On3Sgm0EZD777zBn6LQsAz9rvGlvMwwymXqpnTOIf5LFVJDXUjuQ2oPyjJFU8WD-IiK8ROTUEUZv1WKgHmXLVdOBQ_MohHqL0sPVVl5zDBwew3pbdqlTHqD0A4mxN--uZaNsSZIX1gePZY3wXGs0M-bavsdHWXo4NJzpGepYW_YEu1PEWbywTv7D8-qKkjE7hzyQZCFZPO9DX8CW9H3TShYy17_0AogSWxh_9Fo5EbHsRh2ZOZ5AzhrCipO6cEyP94iNTJddAWv4eJEzKPX8ctWJD30FeZkD8B2oeky0rCqloOc0rwkb_BU912ofVYYRGHntKYFkt68dQ",
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
      Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoibWF5dXJlc2hkaXhpdDIwMDhAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJjM2ZkMDI3My1lMTg3LTQ3NmQtOGU2YS00OGUwZmNiODllNDkiLCJleHAiOjE1NTU2OTk2NTQsImlzcyI6ImNvcHlsZWFrcy5jb20iLCJhdWQiOiJhcGktdjEuY29weWxlYWtzLmNvbSJ9.XSf8-TVu1On3Sgm0EZD777zBn6LQsAz9rvGlvMwwymXqpnTOIf5LFVJDXUjuQ2oPyjJFU8WD-IiK8ROTUEUZv1WKgHmXLVdOBQ_MohHqL0sPVVl5zDBwew3pbdqlTHqD0A4mxN--uZaNsSZIX1gePZY3wXGs0M-bavsdHWXo4NJzpGepYW_YEu1PEWbywTv7D8-qKkjE7hzyQZCFZPO9DX8CW9H3TShYy17_0AogSWxh_9Fo5EbHsRh2ZOZ5AzhrCipO6cEyP94iNTJddAWv4eJEzKPX8ctWJD30FeZkD8B2oeky0rCqloOc0rwkb_BU912ofVYYRGHntKYFkt68dQ",
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
      Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoibWF5dXJlc2hkaXhpdDIwMDhAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJjM2ZkMDI3My1lMTg3LTQ3NmQtOGU2YS00OGUwZmNiODllNDkiLCJleHAiOjE1NTU2OTk2NTQsImlzcyI6ImNvcHlsZWFrcy5jb20iLCJhdWQiOiJhcGktdjEuY29weWxlYWtzLmNvbSJ9.XSf8-TVu1On3Sgm0EZD777zBn6LQsAz9rvGlvMwwymXqpnTOIf5LFVJDXUjuQ2oPyjJFU8WD-IiK8ROTUEUZv1WKgHmXLVdOBQ_MohHqL0sPVVl5zDBwew3pbdqlTHqD0A4mxN--uZaNsSZIX1gePZY3wXGs0M-bavsdHWXo4NJzpGepYW_YEu1PEWbywTv7D8-qKkjE7hzyQZCFZPO9DX8CW9H3TShYy17_0AogSWxh_9Fo5EbHsRh2ZOZ5AzhrCipO6cEyP94iNTJddAWv4eJEzKPX8ctWJD30FeZkD8B2oeky0rCqloOc0rwkb_BU912ofVYYRGHntKYFkt68dQ",
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



