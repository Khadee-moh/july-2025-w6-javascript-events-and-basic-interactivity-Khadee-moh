// Form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const messageBox = document.getElementById("form-message");

    if (name === "") {
        messageBox.textContent = "Name is required.";
        messageBox.style.color = "red";
        return;
    }

    if (!validateEmail(email)) {
        messageBox.textContent = "Invalid email.";
        messageBox.style.color = "red";
        return;
    }

    if (message.length < 10) {
        messageBox.textContent = "Message must be at least 10 characters.";
        messageBox.style.color = "red";
        return;
    }

    messageBox.textContent = "Form submitted successfully!";
    messageBox.style.color = "green";
    document.getElementById("contact-form").reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Click counter
let count = 0;
document.getElementById("counter-btn").addEventListener("click", function () {
    count++;
    document.getElementById("click-count").textContent = count;
});

// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


