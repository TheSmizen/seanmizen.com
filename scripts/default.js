//default.js - main script for seanmizen.com
//Sean Mizen

/**
 * menuToggle will change the hamburger when nav menu is opened.
 */
function menuToggle(){
	//console.log("Toggling menu.");
	containerDiv = document.getElementById("header");
	containerDiv.classList.toggle("open");
	document.getElementById("#subtitle").append("<b>Example Text</b>");
}

//Self-calling function declaration
//Keeps variables from leaking outside this scope
(function()
{
	/*function test (){
		console.log("This is a test.");
    	};*/
    	//test();
	//Activate to test javascript is working

	let c = document.getElementById(“exampleCanvas");
	let ctx=c.getContext("2d");
	ctx.fillStyle="#FF0000";
	ctx.fillRect(0,0,150,75);

}//Close declaration
)();//Run script


