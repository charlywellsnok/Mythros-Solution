const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    // Prevent default form submission
    event.preventDefault();

    // Redirect to form.html
    window.location.href = "form.html";

});


