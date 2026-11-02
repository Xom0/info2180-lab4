document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector("#search-button");
    const searchField = document.querySelector("#search");
    const result = document.querySelector("#result");

    searchButton.addEventListener("click", function () {
        const query = searchField.value.trim();

        fetch("superheroes.php?query=" + encodeURIComponent(query))
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                result.innerHTML = data;
            })
            .catch(function (error) {
                console.error("Error:", error);
                result.innerHTML = "An error occurred while searching.";
            });
    });
});