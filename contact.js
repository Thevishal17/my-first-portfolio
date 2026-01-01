(function () {
    emailjs.init("HUPutT4oHBFxUAHRW"); // 🔴 replace
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_ksfm2qp",   // 🔴 replace
        "template_imkhv07",  // 🔴 replace
        this
    )
    .then(function () {
        document.getElementById("status").innerHTML = "Message sent successfully!";
        document.getElementById("contact-form").reset();
    }, function (error) {
        document.getElementById("status").innerHTML = "Failed to send message. Try again.";
        console.error(error);
    });
});
