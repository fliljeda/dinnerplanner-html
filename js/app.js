$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	
	//And create the needed controllers and views
    var topBanner = new TopBanner($("#topBanner1"));
    var startMessage = new StartMessage($("#mainStart"));
    var sideBar = new SideBar($("#mainFirst"));

});
