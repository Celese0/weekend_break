document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".favourite");
    const currentUser = localStorage.getItem("current_user");

    // Load favourites object from localStorage
    let favourites = JSON.parse(localStorage.getItem("favourites")) || {
        food: [],
        hotel: [],
        activities: []
    };

    checkboxes.forEach(checkbox => {
        const id = checkbox.getAttribute("data-id");
        const type = checkbox.getAttribute("data-type"); // "food", "hotel", or "activities"

        if (!type || !favourites[type]) return;

        // Set checkbox if already favourited
        if (favourites[type].includes(id)) {
            checkbox.checked = true;
        }

        checkbox.addEventListener("change", () => {
            if (!currentUser) {
                alert("Please log in to save favourites.");
                checkbox.checked = false;
                return;
            }

            if (checkbox.checked) {
                if (!favourites[type].includes(id)) {
                    favourites[type].push(id);
                }
            } else {
                favourites[type] = favourites[type].filter(favId => favId !== id);
            }

            localStorage.setItem("favourites", JSON.stringify(favourites));
        });
    });
});
