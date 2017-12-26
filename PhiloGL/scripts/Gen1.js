//Gen1.js - Graphical script for seanmizen.com/PhiloGL/Gen1.html
//Sean Mizen






window.addEventListener("load", function setupWebGL (evt) {
	"use strict"

	

	// Cleaning after ourselves. The event handler removes
	// itself, because it only needs to run once.
	window.removeEventListener(evt.type, setupWebGL, false);
	
	
	let i = 0;
	let j = 50;
	
	let canvas = document.getElementById("CanvasGen1");
	let ctx = canvas.getContext("2d");


	ctx.scale(3/4,3/4);
	//ctx.translate(0,1);
	ctx.beginPath();
	ctx.lineWidth=1/100;

	var lastFrameTime = 0;

	function strokeAll(){
		ctx.stroke();
	
	}
	
	function createCircle(x,y){
		let rad = 50;
		ctx.beginPath();
		ctx.arc(x,y,rad,44.5,2*Math.PI);
		ctx.stroke();
	}
	
	function getCursorPosition(canvas, event) {
		var rect = canvas.getBoundingClientRect();
		i = event.clientX - rect.left;
		j = event.clientY - rect.top;
	}
	
	document.addEventListener('click', function(event) {
		//var mousePos = getCursorPosition(canvas, event);
		getCursorPosition(canvas, event);
		strokeAll();
		createCircle(i,j);
		ctx.lineTo(i,j);
		strokeAll();
		
	}, false);


	
	document.addEventListener('keydown', function(event) {
		if(event.keyCode == 37) {
			i -= 0.5;
		}
		else if(event.keyCode == 38) {
			j += 0.5;
		}
		else if(event.keyCode == 39) {
			i += 0.5;
		}
		else if(event.keyCode == 40) {
			j -= 0.5;
		}
		
		//ctx.lineTo(i,j);
		
	});

	function move(){
		//i = Math.random() * canvas.width;
		//j = Math.random() * canvas.height;
		//ctx.lineTo(i,j);

		
		//ctx.lineTo(i,Math.cos(i));
		
		//i = (i+0.1) %(4*Math.PI);
		
 		
/* 		if (i > 3*Math.PI){
			ctx.beginPath();
		}
		if (i > 1*Math.PI){
			ctx.closePath();
		}
		if (i > 2*Math.PI){
			ctx.beginPath();
		}
 */
 
	}
	
	window.requestAnimationFrame(drawScene);
	 
	// Draw the scene.
	function drawScene(now) {
		// Convert the time to seconds
		now *= 0.02;
		// Subtract the previous time from the current time
		var deltaTime = now - lastFrameTime;
		// Remember the current time for the next frame.
		lastFrameTime = now;
		
		strokeAll();
		
		move();

		requestAnimationFrame(drawScene);

	}


}, false);


