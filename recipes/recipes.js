const recipes =[
    {name: "recipe1", url: "recipe1.html"},
    {name: "recipe2", url: "recipe1.html"},
    {name: "recipe3", url: "recipe1.html"},
    {name: "recipe4", url: "recipe1.html"},
    {name: "recipe5", url: "recipe1.html"},
    {name: "recipe6", url: "recipe1.html"},
    {name: "recipe7", url: "recipe1.html"},
    {name: "recipe8", url: "recipe1.html"},
    {name: "recipe9", url: "recipe1.html"}
]


function updateResults(){
    var query = search_bar.value.toLowerCase();
    search_results.innerHTML = "";

    var filtered = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query)
    );

    filtered.forEach(recipe => {
        var link= document.createElement("a");
        link.href = recipe.url;
        link.textContent = recipe.name;
        search_results.appendChild(link);
    });
}


var search_bar = document.getElementById("recipe_search")
var search_results = document.getElementById("results")

search_bar.addEventListener("focus", () => {
    search_results.style.display = "block";
    updateResults();
});

search_bar.addEventListener("blur", () => {
    setTimeout(() => search_results.style.display = "none", 200);
});

search_bar.addEventListener("input", updateResults);
