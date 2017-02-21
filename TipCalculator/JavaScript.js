
function calculateTip()
{
	"use strict";
	var totalAmount = document.getElementById("bill").value;
	var quality = document.getElementById("Quality").value;
	var numPeople = document.getElementById("totalPeople").value;
	
	if(totalAmount === "" || quality === 0)
		{
			return window.aleart("Please enter some value.");
		}
	
	if(numPeople === "" || numPeople <= 1)
		{
			numPeople=1;
			document.getElementById("each").style.display= "none";
		}
	else 
		{
			document.getElementById("each").style.display = "block";
		}
	
	var total = (totalAmount*quality)/numPeople;
	total = total.toFixed(2);
	
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
	
	
}

document.getElementById("totalTip").style.display= "none";
document.getElementById("each").style.display= "none";


document.getElementById("calculate").onclick = function() { 
	"use strict";
	calculateTip(); } ;