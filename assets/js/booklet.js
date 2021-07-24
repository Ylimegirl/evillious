$(document).ready(function(){
	"use strict";//no clue what this means tbh but i think its important
	var spread = "01";// set the spread the booklet is initially open to
	var finalID = document.getElementById("album").lastElementChild.id;//grab the final page number of the booklet by the ID of the last element nested under the element with the "album" ID
	var max = leadingZero(finalID.substring(1,3)/2+1);//grabs the max spread number by taking the number portion of finalID (i.e. #p00) and then converts that into the amount of spreads the booklet has by dividing it in half and adding one (to account for the "spreads" of the front and back covers as well), and then adds a leading zero if needed
	//console.log("Ready"); //for debugging
	
	$("figure").removeClass("current").addClass("hidden");//sets all pages to No Appear by default
	showSpread(spread);//displays the elements in the first spread of the booklet
	toggleJacket();//and also the jacket
	
	$("#buttonLeft").click(function() {//if the left arrow is clicked
		if(spread !== "01") {//and we're not on the first spread
			hideSpread(spread);//disappear the current spread
			spread--;//move the spread down by one
			spread = leadingZero(spread);//add a leading zero, if needed
			showSpread(spread)//and then display the corresponding spread
			toggleJacket();//toggle the visibility of the jacket
		}
	});
	
	$("#buttonRight").click(function() {//if the right arrow is clicked
		if(spread !== max) {//and we're not on the last spread
			hideSpread(spread);//disappear the current spread
			spread++;//move the spread up by one
			spread = leadingZero(spread);//add a leading zero, if needed
			showSpread(spread)//and then display the corresponding spread
			toggleJacket();//toggles the visibility of the jacket
		}
	});
	
	function toggleJacket() {//toggles the visibility of the jacket
		if(spread == "01")
			$("#jacket").removeClass("hidden").addClass("current");
		else
			$("#jacket").removeClass("current").addClass("hidden");
	};
	
	function showSpread(a) {//shows an inputted spread
		$(".g"+a).removeClass("hidden").addClass("current");
	};
	
	function hideSpread(a) {//hides an inputted spread
		$(".g"+a).removeClass("current").addClass("hidden");
	};
	
	function leadingZero(a) {//adds a leading zero if a number is only one digit
		if(a < 10)
			return "0"+a;
		else
			return a;
	};
});//oh god i first added these comments like two years after i first wrote the code and had to try and figure out my prior self's thought process. fun times