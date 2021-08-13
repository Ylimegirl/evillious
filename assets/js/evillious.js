$(document).ready(function(){
	"use strict";//no clue what this means tbh but i think its important
	//console.log("Ready"); //for debugging
	let hover = window.matchMedia('(hover: hover)'); //grabs media query for hover
	
	$("a").each(function(){//Adds target="_blank" and rel="noreferrer noopener" to all external links
		if(location.hostname !== this.hostname && this.hostname.length)
			$(this).attr({ target: "_blank", rel: "noreferrer noopener"});
	});
	
	if (document.querySelector("ruby.jpn") === null)//if there are no ruby elements on the page of the class "jpn" (so as not to count the fuributton itself in the search)
		$("#fuributton").addClass("hidden");//hide the fuributton
	else
		$("body").addClass("furiMargin");//otherwise adds class to add additional margins for the fuributton's presence
	
	$(".collapse").each(function(){//changes the content of all collapse buttons to "hide", unless the section is already collapsed in which case the content is "show"
		var section = $(this).attr("ID").substring(8,10);
		$(this).html(toggleButtonText(section));//updates the text of the buttons
	});
	
	$("#fuributton").click(function() {//toggles furigana on and off when the fuributton is clicked
		$("rt").toggleClass("hidden");//toggles the relevant CSS class
	});

	$(".collapse").click(function() {//opens and closes collapsible sections when a collapse button is clicked
		var section = $(this).attr("ID").substring(8,10);//grabs the section ID of the collapsible section for the given button i.e. collapse08 outputs 08 for collapsible08
		$("#collapsible"+section).toggleClass("collapsed");//toggles the relevant CSS class
		$(this).html(toggleButtonText(section));//updates the text of the button
	});
	
	function toggleButtonText(a) {//updates the text of the show/hide button
		if($("#collapsible"+a).hasClass("collapsed"))
			return "[show]";
		else
			return "[hide]";
	}
	
	if(hover.matches) {//if the media is one that allows for hovering
		//console.log("yes hover");//for debugging
		$(".jpn").hover(function() {//this is when i make an attempt to do tooltip shit ig key word being attempt. anyways makes tooltip go brrr when hover over .jpn thingie, theoretically
			//console.log("fuck") //for debugging
			$(".jpn").mousemove(function(event){//when mouse enters
				$(this).children(".romaji").css({//change the inline style of the corresponding romaji object
					"position": "fixed",//set position to be fixed on the screen
					"left": event.clientX+10,//and to appear 10 pixels right of
					"top": event.clientY+20//and 20 pixels below the mouse position
				});
			});
		}, function() {//when mouse leaves
			//console.log("unfuck") //for debugging
			$(this).children(".romaji").css({//change the inline style of the corresponding romaji object
				"position": "",//time to
				"left": "",//reset all
				"top": "",//the parameters
			});
		});
	}
	else {//if the device doesn't allow hovering (such as a mobile phone)
		//console.log("no hover");//for debugging
		$(".jpn").click(function() {//when clicking a .jpn element
			$(".romaji").removeClass("current");//hide any other romaji then
			$(this).children(".romaji").addClass("current");//show the current romaji
		});
		$("body").click(function(e) {
			if(!$(e.target).closest(".jpn").length)//if clicking literally any other element besides a .jpn element
				$(".romaji").removeClass("current");//hide all the romaji
		});
	}
});//disclaimer im not a good javascript programmer i barely know what im doing