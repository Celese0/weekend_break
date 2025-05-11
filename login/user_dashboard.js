document.addEventListener('DOMContentLoaded', function () {
    var user = localStorage.getItem("current_user");

    var user_details = JSON.parse(localStorage.getItem("current_user"));

    if (!user){
        window.location.href = "login_page.html"
    } else {
        document.getElementById("username").value = user_details.username;
        document.getElementById("password").value = user_details.password;
    }

    const favourites = JSON.parse(localStorage.getItem('favourites')) || {
        food: [],
        hotel: [],
        activity: []
    };

    const bookmarksContainer = document.querySelector('.bookmarks');
    bookmarksContainer.innerHTML = '';

    // Utility to render a card
    function renderCard(type, id, data, folder) {
        if (!data) return;

        const favLink = document.createElement('a');
        favLink.href = `../${type}/${type}.html?place=${id}`;
        favLink.classList.add('card_link');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image_container');

        const image = document.createElement('img');
        image.id = 'image';
        image.src = `../${type}/${data.image}`;
        image.alt = data.name;

        imageContainer.appendChild(image);
        cardDiv.appendChild(imageContainer);

        const name = document.createElement('h2');
        name.textContent = data.name;
        cardDiv.appendChild(name);

        favLink.appendChild(cardDiv);
        bookmarksContainer.appendChild(favLink);
    }

    // Render food favourites
    if (favourites.food && favourites.food.length > 0) {
        favourites.food.forEach(id => {
            renderCard("food", id, food_data[id]);
        });
    }

    // Render hotel favourites
    if (favourites.hotel && favourites.hotel.length > 0) {
        favourites.hotel.forEach(id => {
            renderCard("hotel", id, hotel_data[id]);
        });
    }

    // Render activities favourites
    if (favourites.activity && favourites.activity.length > 0) {
        favourites.activity.forEach(id => {
            renderCard("activities", id, activity_data[id]);
        });
    }

    // Show a message if no favourites at all
    if (
        favourites.food.length === 0 &&
        favourites.hotel.length === 0 &&
        favourites.activity.length === 0
    ) {
        const msg = document.createElement('p');
        msg.textContent = 'No favourites added yet.';
        bookmarksContainer.appendChild(msg);
    }
});

function changeContent(page){
    var sections = document.querySelectorAll(".bookmarks_selected, .user_info_selected, .calendar_selected");

    sections.forEach(section => {
        section.style.display = "none";
    });

    var selectedSection = document.querySelector(`.${page}`);
    if (selectedSection){
        selectedSection.style.display = "block";
    }
}

function editDetails() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var updated_details = {
        username: username,
        password: password
    };

    localStorage.setItem("current_user", JSON.stringify(updated_details));
    document.getElementById("username").value = username;
    document.getElementById("password").value = password;

    alert("Details were updated successfully");
}
