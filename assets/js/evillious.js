$(document).ready(function(){
	"use strict";//no clue what this means tbh but i think its important
	//console.log("Ready"); for debugging
	
	$("a").each(function(){//Adds target="_blank" and rel="noreferrer noopener" to all external links
		if(!(location.hostname === this.hostname || !this.hostname.length))
			$(this).attr({ target: "_blank", rel: "noreferrer noopener"});
	});
	
	$(".collapse").each(function(){//changes the content of all collapse buttons to "hide", unless the section is already collapsed in which case the content is "show"
		var section = $(this).attr("ID").substring(8,10);
		if($("#collapsible"+section).hasClass("collapsed"))
			$(this).html("[show]");
		else
			$(this).html("[hide]");
	});
	
	$("#fuributton").click(function() {//toggles furigana on and off when the fuributton is clicked
		$("rt").toggleClass("hidden");//toggles the relevant CSS class
	});

	$(".collapse").click(function() {//opens and closes collapsible sections when a collapse button is clicked
		var section = $(this).attr("ID").substring(8,10);//grabs the section ID of the collapsible section for the given button i.e. collapse08 outputs 08 for collapsible08
		$("#collapsible"+section).toggleClass("collapsed");//toggles the relevant CSS class
		if($("#collapsible"+section).hasClass("collapsed"))//updates the text of the button
			$(this).html("[show]");
		else
			$(this).html("[hide]");
	});

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
			"top": ""//the parameters
		});
	});
});//disclaimer im not a good javascript programmer i barely know what im doing