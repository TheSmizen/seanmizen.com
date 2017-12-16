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
	

}//Close declaration
)();//Run script
