var slider = document.getElementById("slider");
var image_then = document.getElementById("image_now");
var area_box = document.getElementById("area_box");

slider.addEventListener("input", function() {
    var opacity = slider.value;
    image_then.style.opacity = opacity;
});

var map_pins =[
    {
        name: "Location A",
        address: "Test Address 1",
        description: "Description for Location A",
        image_then: "../recipes/recipe1.jpg",
        image_now: "../people/person1.jpg"
    },
    {
        name: "Location B",
        address: "Test Address 2",
        description: "Description for Location B",
        image_then: "../recipes/recipe1.jpg",
        image_now: "../people/person1.jpg"
    },
    {
        name: "Location C",
        address: "Test Address 3",
        description: "Description for Location C",
        image_then: "../recipes/recipe1.jpg",
        image_now: "../people/person1.jpg"
    },
    {
        name: "Location D",
        address: "Test Address 4",
        description: "Description for Location D",
        image_then: "../recipes/recipe1.jpg",
        image_now: "../people/person1.jpg"
    }
]


function updateInfo(index){
    var info = map_pins[index];
    console.log(info)
    document.getElementById("place_name").textContent = info.name;
    document.getElementById("place_description").textContent = info.description;
    var new_image_then = document.getElementById("image_then");
    var new_image_now = document.getElementById("image_now");
    new_image_then.src = info.image_then;
    new_image_now.src = info.image_now;


}

function showArea(index, event){
    var info = map_pins[index];
    document.getElementById("area_name").textContent = info.title;
    document.getElementById("area_address").textContent = info.address;
    document.getElementById("area_description").textContent = info.description

    var pin = event.currentTarget;
    area_box.style.top = pin.style.top;
    area_box.style.left = pin.style.left;
    area_box.style.opacity = "1";
    area_box.style.visibility = "visible"

};

function hideArea(){
    area_box.style.opacity = "0";
    area_box.style.visibility = "hidden"
};


