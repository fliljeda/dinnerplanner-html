var TopBanner = function (container) {

    var navBar = document.createElement("nav");
    navBar.className += " navbar navbar-default navbar-fixed-top";
    container.append(navBar);

    var navContainer = document.createElement("div");
    navContainer.className += " container";
    navContainer.id = "navContainer";
    navBar.append(navContainer);

    var navHeader = document.createElement("p");
    navHeader.id = "myHeader";
    navHeader.innerHTML = "HOMELETTE";
    navContainer.append(navHeader);

    var navQuote = document.createElement("p");
    navQuote.id = "quote";
    navQuote.innerHTML = "From the best chefs in the world directly into your kitchen";
    navContainer.append(navQuote);
}
