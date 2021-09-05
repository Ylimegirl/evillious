function externalLinks() {
	$("a").each(function(){//Adds target="_blank" and rel="noreferrer noopener" to all external links
		if(location.hostname !== this.hostname && this.hostname.length)
			$(this).attr({ target: "_blank", rel: "noreferrer noopener"});
	});
}