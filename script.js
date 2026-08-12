// Local Tourism Explorer
// JavaScript functionality


// Destination information
const destinations = {
    Chennai: {
        title: "Chennai",
        description:
            "Explore Marina Beach, local food, temples, museums and the vibrant culture of Chennai."
    },

    Ooty: {
        title: "Ooty",
        description:
            "Enjoy beautiful hills, gardens, lakes and the refreshing climate of the Nilgiris."
    },

    Mahabalipuram: {
        title: "Mahabalipuram",
        description:
            "Discover the famous Shore Temple, ancient stone sculptures and beautiful coastal views."
    },

    Madurai: {
        title: "Madurai",
        description:
            "Experience the magnificent Meenakshi Amman Temple, traditional culture and famous local cuisine."
    }
};


// Show destination information
function showDestination(place) {

    const destination = destinations[place];

    if (!destination) {
        return;
    }

    alert(
        destination.title +
        "\n\n" +
        destination.description
    );
}


// Explore button
function startExploring() {

    const destinationSection =
        document.getElementById("destinations");

    if (destinationSection) {
        destinationSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// Welcome message when page loads
window.addEventListener("load", function () {

    console.log(
        "Welcome to Local Tourism Explorer!"
    );

});