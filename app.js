document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector("#search-button");

    searchButton.addEventListener("click", function () {
        fetch("superheroes.php")
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                alert(data);
            })
            .catch(function (error) {
                console.error("Error:", error);
            });
    });
});