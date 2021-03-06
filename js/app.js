$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	
	//And create the needed controllers and views
    var topBanner = new TopBanner($("#topBanner1"));
    var startMessage = new StartMessage($("#mainStart"));
    if ($("#page3").length){ //if div exists
        var itemDescription = new ItemDescription($("#page3"), model);
    }
    if ($("#overview_page").length){ //if div exists
        var overview = new Overview($("#overview_page"), model);
    }
    if ($("#print_page").length){ //if div exists
        var print = new Print($("#print_page"), model);
    }
    if ($("#selectDish").length){ //if div exists
        var selectDish = new SelectDish($("#selectDish"), model);
    }
    var sideBar = new SideBar($("#sideBarDiv"));

});
