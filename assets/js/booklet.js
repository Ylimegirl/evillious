$(document).ready(function(){
	"use strict";//no clue what this means tbh but i think its important
	var page = "01";// set the "page" the booklet is initially open to
	var finalID = document.getElementById("album").lastElementChild.id;//grab the final "page" of the booklet by the ID of the last element nested under the element with the "album" ID
	var max = finalID.substring(1,3)/2+1;//grabs the max page number by taking the number portion of finalID (i.e. #p00) and then converts that into the amount of spreads the booklet has by dividing it in half and adding one (to account for the "spreads" for the front and back covers as well)
	if(max < 10)//if the max value is less than 10
		max="0"+max;//it adds a leading zero to the max number
	//console.log("Ready"); //for debugging
	$("figure").css("visibility", "hidden");//sets all pages to No Appear by default
	$(".g01").css("visibility", "visible");//displays the elements in the first spread of the booklet
	$("#buttonLeft").click(function() {//if the left arrow is clicked
		if(page !== "01") {//and we're not on the first spread
			$(".g"+page).css("visibility", "hidden");//disappear the current spread
			page--;//move the spread down by one
			if(page<10)//if the current spread value is less than 10
			page="0"+page;//add a leading zero
			$(".g"+page).css("visibility", "visible");//and then display the corresponding spread
		}
	});
	$("#buttonRight").click(function() {//if the right arrow is clicked
		if(page !== max) {//and we're not on the last spread
			$(".g"+page).css("visibility", "hidden");//disappear the current spread
			page++;//move the spread up by one
			if(page<10)//if the current spread value is less than 10
			page="0"+page;//add a leading zero
			$(".g"+page).css("visibility", "visible");//and then display the corresponding spread
		}
	});
});//oh god i added these comments like two years after i first wrote the code and had to try and figure out my prior self's thought process. fun times