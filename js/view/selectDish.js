var SelectDish = function (container, dinnermodel) {

    //WHOLE VIEW CONTAINER
    var viewContainer = document.createElement("div");
    viewContainer.className += "col-md-10 container";
    viewContainer.style.height = "100%";
    viewContainer.style.marginRight = "0px";
    container.append(viewContainer);

    //THE BAR WHERE YOU SELECT DISHES
    var dishSelectBar = document.createElement("div");
    dishSelectBar.className += "row";
    dishSelectBar.style.border = "3px solid";
    dishSelectBar.style.backgroundColor = "#FFE599";
    viewContainer.append(dishSelectBar);


    //TITLE

    var selectDishTitle = document.createElement("div");
    selectDishTitle.innerHTML = "<h3>SELECT DISH</h3>";
    selectDishTitle.className += " row";
    dishSelectBar.append(selectDishTitle);

    //SEPERATION LINE
    dishSelectBar.append(document.createElement("hr"));


    //SEARCH BAR (container)
    var searchContainer = document.createElement("div");
    searchContainer.className += " row";
    dishSelectBar.append(searchContainer);

    var searchDiv = document.createElement("div");
    searchDiv.style.paddingRight = "0px";
    searchDiv.className += " col-md-3";
    searchContainer.append(searchDiv);

    var searchForm = document.createElement("input");
    searchForm.setAttribute("type", "text");
    searchForm.className += " form-control";
    searchForm.placeholder = "Enter key words";
    searchForm.id = "selectedDishSearch";
    searchDiv.append(searchForm);

    //SEARCH BUTTON 

    var searchButtonDiv = document.createElement("div");
    searchButtonDiv.className += " col-md-2";
    searchButtonDiv.style.paddingLeft = "0px";
    searchContainer.append(searchButtonDiv);

    var searchButton = document.createElement("button");
    searchButton.innerHTML = "SEARCH";
    searchButton.setAttribute("type", "button");
    searchButton.className += " col-md-2 btn button-default";
    searchButton.id = "selectedDishSearchButton";
    searchButtonDiv.append(searchButton);

    


    //COURSE MENU (container)
    var courseMenu = document.createElement("div");
    courseMenu.style.display = "inline-block";
    courseMenu.className += "col-md-3";
    searchContainer.append(courseMenu);

    // course form
    var courseForm = document.createElement("div");
    courseForm.className += " form-group";
    courseMenu.append(courseForm);

    var courseSelector = document.createElement("select");
    courseSelector.className += " form-control";
    courseSelector.id = "chosenCourse";
    courseForm.append(courseSelector);

    var option = document.createElement("option");
    option.innerHTML = "starter";
    option.setAttribute("value", "main dish");
    courseSelector.append(option);
    var option2 = document.createElement("option");
    option2.innerHTML = "main dish";
    option2.setAttribute("value", "main dish");
    courseSelector.append(option2);
    var option3 = document.createElement("option");
    option3.innerHTML = "dessert";
    option3.setAttribute("value", "dessert");
    courseSelector.append(option3);


    //LIST AND PICTURES OF FOOD
    var foodList = document.createElement("div");
    foodList.className += "row";
    foodList.id = "foodList";
    viewContainer.append(foodList);


    var menu = dinnermodel.getAllDishes(courseSelector.value);
    console.log(menu.length);
    console.log(courseSelector.value);


    for(var i = 0; i < menu.length; i++){
        var dish = menu[i];

        //FOOD CONTAINER 1
        var foodContainer = document.createElement("div");
        foodContainer.className += "col col-md-2 foodContainer";
        foodList.append(foodContainer);

        //FOOD PICTURE 2
        var pictureOfFood = document.createElement("img");
        pictureOfFood.setAttribute("src", "images/" + dish.image);
        pictureOfFood.className += " selectDishFoodPicture";
        foodContainer.append(pictureOfFood);

        //FOOD TITLE 3 (button)
        var foodTitle = document.createElement("button");
        foodContainer.append(foodTitle);
        foodTitle.className += "btn button-default selectDishFoodTitle";
        foodTitle.innerHTML = dish.name;
        foodTitle.setAttribute("type", "button");

        //FOOD DESCRIPTION 4 (text)
        var foodDescription = document.createElement("p");
        foodDescription.innerHTML = dish.description;
        foodContainer.append(foodDescription);
    }





}

