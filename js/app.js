$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	
	//And create the needed controllers and views
    var topBanner = new TopBanner($("#topBanner1"));
    var startMessage = new StartMessage($("#mainStart"));
    if ($("#page3").length){ //if div exists
        var itemDescription = new ItemDescription($("#page3"), model);
    }
    var sideBar = new SideBar($("#sideBarDiv"));

});
