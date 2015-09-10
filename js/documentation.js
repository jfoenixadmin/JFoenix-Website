window.onload= function(){
	var str = window.location.href;
	var div = str.split('#')[1];
	
	if (div) {
	    goToSection("#" + div);
	}

	document.getElementById('search').onkeyup = function (event) {
        // handle only on enter pressed 
		// if (event.keyCode == 13)  handle();		
		handle();
	}

	$("#side-menu-holder a, #search-menu-holder a").click(function () {
	    var ul = $(this).next(),
		clone = ul.clone().css({ "height": "auto" }).appendTo("#side-menu-holder"),
		height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
	    clone.remove();
	    ul.animate({ "height": height });
	    return false;
	});

	$("#side-menu-holder > ul > li > ul > li").each(function () {
	    $(this).attr('href', "#" + $(this).text().replace(/\s/g, ''));
	})

	$("#side-menu-holder > ul > li > ul > li").click(function () {
	    highlight(this);
	    return false;
	})

};

function handle() {

    $("#side-menu-holder").css("display", "none");	
	$("#search-menu-holder").css("display", "block");

	var searchfield = document.getElementById("search").value.toLowerCase();
	if (!searchfield) {	
	    $("#side-menu-holder").css("display", "block");
	    $("#search-menu-holder").css("display", "none");
	}

	var results = [];
	$("#side-menu-holder > ul > li > ul > li").each(function () {
	    var name = $(this).text();
	    if (name.toLowerCase().indexOf(searchfield) > -1) {
	        var appendStr = "<li>" + name + "</li>";
	        if (isInArray(appendStr, results) == 0) results.push(appendStr);
	    }
	})


	$("#searchResult").empty();
	for (var i = 0 ; i < results.length ; i++) 
	    $("#searchResult").append(results[i]);

	
	$("#search-menu-holder > ul > li > ul > li").each(function () {
	    $(this).attr('href', "#" + $(this).text().replace(/\s/g, ''));
	    $(this).click(function () {
	        highlight(this);
	        return false;
	    })
	})
}	

function isInArray(value, array) {
	return array.indexOf(value) > -1;
}

function highlight(e) {

    var listItems = document.getElementById("side-menu-holder").getElementsByTagName("li");
    $("#search-menu-holder > ul > li > ul > li, #side-menu-holder > ul > li > ul > li").each(function () {
        $(this).removeClass("selected-item");
    })

    $(e).addClass("selected-item");
    if (history.pushState) history.pushState({}, document.title, $(e).attr("href"));
		
    sectionID = $(e).attr("href").toLowerCase();
    goToSection(sectionID);


}
function goToSection(sectionID) {
    var selectedSection;
    var sectionsContainer = [];
    $("section").each(function () {
        if ("#" + $(this).attr("id").toLowerCase() == sectionID.toLowerCase())
            selectedSection = this;

        if (isInArray($(this).parent(), sectionsContainer) == 0)
            sectionsContainer.push($(this).parent());
    })

    if (selectedSection) {
        for (var i = 0 ; i < sectionsContainer.length; i++)
            $(sectionsContainer[i]).css("display", "none");
        $(selectedSection).parent().css("display", "block");
        $('html, body').animate({ scrollTop: $(selectedSection).offset().top - 20 }, 'slow');
    }
}
