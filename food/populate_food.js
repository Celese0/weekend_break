

var parameter = new URLSearchParams(window.location.search);
var restaurant = parameter.get("place")


if (restaurant && food_data[restaurant]) {
    var data = food_data[restaurant]
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("description").innerHTML = data.description;
    document.getElementById("book").href = data.book;
    document.getElementById("image").src = data.image;
    document.getElementById("map").src = data.map;
    document.getElementById("place_desc").innerHTML = data.place_desc;
}
else{
    window.location.href = "not_found.html"
}