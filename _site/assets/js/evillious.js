$(document).ready(function(){
	"use strict";//no clue what this means tbh but i think its important
	var furi = true;//default furigana to be appear
	console.log("Ready"); //for debugging
	
	$("#fuributton").click(function() {//toggles furigana on and off when the fuributton is clicked
		if(furi) {//if furi is available when button climcked
			$("rt").css("display", "none");//it disappear
			furi = false;//and changes the boolean value
		}
		else {//if furi is disappeared when button climkced
			$("rt").css("display", "");//it reappear
			furi = true;//and changes the boolean value
		}
	});

	$("button.collapse").click(function() {//opens and closes collapsible sections when a collapse button is clicked
		var section = $(this).attr("ID").substring(8,10);//grabs the section ID of the collapsible section for the given button i.e. collapse08 outputs 08 for collapsible08
		//console.log("activated"); //for debugging
		if ( $("#collapsible"+section).attr("class") === "collapsed") {//if the section's class is collapsed,
			$("#collapsible"+section).css("display", "");//revert to the default display value by removing the rule entirely (blah blah it varies depending on the element type and "revert" while dope as hell in principle only works in like almost no browsers very rude)
			$("#collapsible"+section).attr("class", "");//and then remove the collapsed class
		}
		else {//if the sections class is Not collapsed
			$("#collapsible"+section).css("display", "none");//change the display value to none
			$("#collapsible"+section).attr("class", "collapsed");//and change the class to collapsed
		}
	});

	$(".jpn").hover(function() {//this is when i make an attempt to do tooltip shit ig key word being attempt. anyways makes tooltip go brrr when hover over .jpn thingie, theoretically
		//console.log("fuck") //for debugging
		$(".jpn").mousemove(function(event){
			$(this).children(".romaji").css({//when mouse enters
				"position": "fixed",//set position to be fixed on the screen
				"left": event.clientX+10, //and to appear 10 pixels right of
				"top": event.clientY+20 //and 20 pixels below the mouse position
			});
		});
	}, function() {//when mouse leaves
		//console.log("unfuck") //for debugging
		$(this).children(".romaji").css({//when mouse enters
			"position": "",//time to
			"left": "",//reset all
			"top": ""//the parameters
		});
	});
});//disclaimer im not a good javascript programmer i barely know what im doing