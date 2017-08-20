var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


//RENDER CLOCK
function renderClock(){
	var date 		 = new Date();
	var hour 		 = date.getHours();
	var minutes 	 = date.getMinutes();
	var seconds 	 = date.getSeconds();
	var milliseconds = date.getMilliseconds();
	var newHours	 = hour+minutes/60
	var newMinutes	 = minutes+seconds/60;
	var newSeconds   = seconds+milliseconds/1000;



//BACKGROUND
	var gradient = ctx.createRadialGradient(250,250,5,250,250,300);
	gradient.addColorStop(0,'#00FF0D');
	gradient.addColorStop(1,'#63E0FF');
	ctx.beginPath();
	ctx.fillStyle = gradient;
	ctx.arc(250,250,250,0,2*Math.PI)
	ctx.fill();


	ctx.beginPath();
	ctx.strokeStyle = "#000000";
	ctx.arc(250,250,245,0,2*Math.PI);
	ctx.lineWidth = 10;
	ctx.stroke();
	
//SETTINGS
	// ctx.shadowBlur = 28;
	// ctx.shadowColor = "#28d1fa";
	// ctx.lineWidth = 17;
	
	

	ctx.beginPath();
	ctx.arc(250,250,10,0,Math.PI*2);
	ctx.fillStyle = '#000000';
	ctx.fill();

	ctx.beginPath();
	ctx.lineWidth =16;
	ctx.moveTo(250,250);
	ctx.lineTo(getX(125,toRad(newHours*15*2-90)),getY(125,toRad(newHours*15*2-90)));
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth =10;
	ctx.moveTo(250,250);
	ctx.lineTo(getX(200,toRad(newMinutes*6-90)),getY(200,toRad(newMinutes*6-90)));
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth =5;
	ctx.moveTo(250,250);
	ctx.lineTo(getX(250,toRad(newSeconds*6-90)),getY(250,toRad(newSeconds*6-90)));
	ctx.stroke();

//CIFFERS
	// ctx.beginPath();
	// ctx.font = "40px Arial";
	// ctx.fillStyle = "#000000";
	// ctx.fillText("3",getX(220,toRad(360/12*3-90)),getY(220,toRad(360/12*3-90)));
ciferblate();
	requestAnimationFrame(renderClock);
}
requestAnimationFrame(renderClock);

//TRANSFORM FUNCTIONS
function toRad(degrees){
	var deg = Math.PI/180;
	return deg*degrees;
}
function getX(rad,deg){
	return 250+Math.cos(deg)*rad;
}
function getY(rad,deg){
	return 250+Math.sin(deg)*rad;
}

function ciferblate(){
	var nums = new Array(12).fill(null);
	nums.forEach( function(element, index) {
		ctx.beginPath();
		ctx.font = "40px Arial";
		ctx.fillStyle = "#8E0200";
		ctx.fillText(index+1,getX(220,toRad(360/12*(index+1)-90))-15,getY(220,toRad(360/12*(index+1)-90))+15);
	});


}
