var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');
var app = express();
var io = require('socket.io')(server);
var server = require('http').createServer(app);
var path = require('path');
var Countdown = require('countdown-js');
var readline = require('readline');
var csv  = require('csv');
var parse = require('csv-parse');
var obj = parse();

var hostname = '0.0.0.0'; 
var port = 8000; 

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res, next){	
	res.sendFile(__dirname + '/index.html');
		
	
});

server.listen(port);


var SwitchStates = [0,1,2];

var globalstates;
var states = [];
var index = [];
var P1F;
var P1D;
var P1F, P1D, P2F, P2D, P3F, P3D, P4F, P4D, B1C, B1R;

function Switches(P1F, P1D, P2F, P2D, P3F, P3D, P4F, P4D, B1C, B1R) {
	
	this.PumpOneFill= P1F;
	this.PumpOneDrain = P1D;
	this.PumpTwoFill = P2F;
	this.PumpTwoDrain = P2D;
	this.PumpThreeFill = P3F;
	this.PumpThreeDrain = P3D;
	this.PumpFourFill = P4F;
	this.PumpFourDrain = P4D;
	this.BilgeOneCenter = B1C;
	this.BIlgeOneRear = B1R;
	
};

var SwitchStates = [0,1,2];


function Switchblast() {
	
	
		for (var index = 0; index < states.length; index++) {
 		SwitchStates.push(new Switches(states[index][0], states[index][1], states[index][2], states[index][3], states[index][4], states[index][5], states[index][6], states[index][7], states[index][8], states[index][9]));
	
	
			Pump1F = (states[index][0]);
			Pump1D = (states[index][1]);
			Pump2F = (states[index][2]);
			Pump2D = (states[index][3]);
			Pump3F = (states[index][4]);
			Pump3D = (states[index][5]);
			Pump4F = (states[index][6]);
			Pump4D = (states[index][7]);
			Bilge1C = (states[index][8]);
			Bilge1R = (states[index][9]);



		
		
			
			

		
}

	


	return states;

}







var io = require('socket.io').listen(server);


io.sockets.on('connection', function(socket){

console.log("We're Connected");
	
	
	
	//On page load send connected message to console

	

	//Refresh States when polling request sent from browser. (Every 5 seconds)
    socket.on('RefreshStates', function(states){
	    
	    
 var parser = parse({delimiter: ','}, function  Getstates(err, states){
	

	Switchblast()


	P1F = states[0][0];
	 P1D = states[0][1];
	P2F = states[0][2];
	 P2D = states[0][3];
	P3F= states[0][4];
	 P3D = states[0][5];
	P4F = states[0][6];
	 P4D = states[0][7];
	B1C = states[0][8];
	 B1R = states[0][9];
	 
	
});


fs.createReadStream('/home/pi/boatmon/public/switchstates.csv').pipe(parser);

	   
	    
	    setTimeout(function(){
	    console.log(P1F, P1D, P2F, P2D, P3F, P3D, P4F, P4D, B1C, B1R);
	    console.log('');}, 1000);
	    
	    
	    
	       io.sockets.emit('SwitchPolling', {P1F: P1F, P1D: P1D, 
								   P2F: P2F, P2D: P2D, 
								   P3F: P3F, P3D: P3D, 
								   P4F: P4F, P4D: P4D, 
								   B1C: B1C, B1R: B1R
								   
								});
	    
	    
    });
    



		



});