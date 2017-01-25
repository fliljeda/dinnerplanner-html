$(function() {
	//We instantiate our model
	var model = new DinnerModel();

    model.setNumberOfGuests(1);

    model.addDishToMenu(1);

    model.addDishToMenu(2);

    console.log(model.getFullMenu());
    console.log(model.getSelectedDish("starter"));
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));

});
