var SideBar = function (container) {

    var sideBar = document.createElement("div");
    sideBar.className += "col-md-2 nav nav-pills nav-stacked";
    sideBar.id = "sidebar";
    container.append(sideBar);


    var header4 = document.createElement("div");
    header4.className += " row";
    header4.innerHTML = "<h3>My Dinner</h3>";
    header4.style.fontWeight = "bold";
    sideBar.append(header4);

    var numberOfGuests = document.createElement("div");
    numberOfGuests.className += " row";
    numberOfGuests.id = "ppl";
    numberOfGuests.style.height = "30px";
    sideBar.append(numberOfGuests);

    var people = document.createElement("p");
    people.style.float = "left";
    people.style.paddingTop = "5px";
    people.style.paddingRight = "5px";
    people.innerHTML = "People";
    numberOfGuests.append(people);

    
    var value = 1; //TODO: fetch value from dinnerModel.js

    var textbox = document.createElement("input");
    textbox.id = "textbox";
    textbox.setAttribute("type", "text");
    textbox.setAttribute("readonly", "readonly");
    textbox.setAttribute("value", value);
    numberOfGuests.append(textbox);

    var incrementor = document.createElement("div");
    incrementor.className += " btn-group-vertical";
    incrementor.id = "incrementor";
    numberOfGuests.append(incrementor);

    var buttonUp = document.createElement("button");
    buttonUp.className += " glyphicon glyphicon-chevron-up";
    buttonUp.setAttribute("type", "button");
    buttonUp.setAttribute("onclick", "incrementValue()");
    incrementor.append(buttonUp);

    var buttonDown = document.createElement("button");
    buttonDown.className += " glyphicon glyphicon-chevron-down";
    buttonDown.setAttribute("type", "button");
    buttonDown.setAttribute("onclick", "decrementValue()");
    incrementor.append(buttonDown);

    var dishName = document.createElement("div");
    dishName.className += " row";
    dishName.id = "dishName";
    sideBar.append(dishName);

    var dishText = document.createElement("p");
    dishText.style.float = "left";
    dishText.style.padding = "10px";
    dishText.innerHTML = "Dish Name";
    dishName.append(dishText);

    var dishCost = document.createElement("p");
    dishCost.style.float = "right";
    dishCost.style.padding = "10px";
    dishCost.innerHTML = "Cost";
    dishName.append(dishCost);

    var products = document.createElement("div");
    products.className += " row";
    products.id = "products";
    sideBar.append(products);

    var pending = document.createElement("p");
    pending.style.float = "left";
    pending.innerHTML = "Pending";
    products.append(pending);

    var pendingSum = document.createElement("p");
    pendingSum.style.float = "right";
    pendingSum.innerHTML = "TODO"; //get actual data from dinnerModel.js. 
    products.append(pendingSum);

    var totalSum = document.createElement("div");
    totalSum.id = "totalSum";
    sideBar.append(totalSum);

    var pendingSum = document.createElement("p");
    pendingSum.style.float = "right";
    pendingSum.innerHTML = "SEK TODO"; //get actual data from dinnerModel.js. 
    totalSum.append(pendingSum);

    var confirmButton = document.createElement("div");
    confirmButton.id = "confirmButton";
    sideBar.append(confirmButton);

    var confButton = document.createElement("button");
    confButton.className += " btn-default"
    confButton.setAttribute("type", "button");
    confButton.innerHTML = "Confirm Dinner";
    confirmButton.append(confButton);

}

function incrementValue()
{
    var value = parseInt(document.getElementById('textbox').value, 10);
    value++;
    document.getElementById('textbox').value = value;
}

function decrementValue()
{
    var value = parseInt(document.getElementById('textbox').value, 10);
    value--;
    if(value == 0) value = 1;
    document.getElementById('textbox').value = value;
}
