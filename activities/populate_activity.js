


var parameter = new URLSearchParams(window.location.search);
var activity_type = parameter.get("place")


if (activity_type && activity_data[activity_type]) {
    var data = activity_data[activity_type]
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("description").innerHTML = data.description;
    document.getElementById("price").innerHTML = data.price;
    document.getElementById("book").href = data.book;
    document.getElementById("image").src = data.image;
    document.getElementById("map").src = data.map;
    document.getElementById("place_desc").innerHTML = data.place_desc;
}
else{
    window.location.href = "not_found.html"
}