function validateForm() {
    if (
        name.value === "" ||
        email.value === "" ||
        message.value === ""
    ) {
        alert("Please fill all fields");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}

const text = "Web Developer | Software Engineer | CSE Student";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = function () {
    typeEffect();

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(element => {
        new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                element.classList.add("show");
            }
        }).observe(element);
    });
};

function toggleTheme() {
    document.body.classList.toggle("light");
}
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".certificate-item img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
};

modal.onclick = () => {
    modal.style.display = "none";
};
