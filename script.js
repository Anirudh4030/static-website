document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("bg-video");

    // Enable audio on first click anywhere
    document.body.addEventListener("click", function () {
        video.muted = false;
        video.play();
    }, { once: true }); // Ensures it runs only once
});


document.addEventListener("DOMContentLoaded", function () {
    const chatOutput = document.getElementById("chat-output");
    const userInput = document.getElementById("user-input");

    function sendMessage() {
        let userText = userInput.value.trim();
        if (userText === "") return;

        // Add user message
        chatOutput.innerHTML += `<p><strong>You:</strong> ${userText}</p>`;

        // Get Anniyan's reply
        let anniyanReply = getAnniyanResponse(userText);
        setTimeout(() => {
            chatOutput.innerHTML += `<p><strong>Aparichithudu:</strong> ${anniyanReply}</p>`;
            chatOutput.scrollTop = chatOutput.scrollHeight;
        }, 1000);

        userInput.value = "";
    }

    function getAnniyanResponse(input) {
        input = input.toLowerCase();

        // Basic responses
        if (input.includes("corruption")) {
            return "Corruption is a disease. Justice will be served!";
        } else if (input.includes("crime")) {
            return "Criminals must be punished. No mercy!";
        } else if (input.includes("help")) {
            return "Justice is here. What help do you need?";
        } else if (input.includes("rules")) {
            return "A man must follow the rules of Dharma!";
        }else if (input.includes("thank")) {
                return "Its My Duty To Punish ";
        } else if (input.includes("rama")) {
                return "I will kill Rama Krishna In University Its self";    
        } else if (input.includes("ved")) {
                return "College bathroom lo raktham kakkukuni pothadu";
        } else if (input.includes("karthik")) {
                return "spyder movie lo mahesh babu ki ayinattu avthadhi";
        } else {
            return "Your complaint is registered. Justice will be done!";
        }
    }

    // Attach event listener to button
    window.sendMessage = sendMessage;
});

document.addEventListener("DOMContentLoaded", function () {
    const openPopup = document.getElementById("open-popup");
    const workersPopup = document.getElementById("workers-popup");
    const closePopup = document.getElementById("close-popup");

    if (openPopup && workersPopup && closePopup) {
        // Show the popup when clicking the button
        openPopup.addEventListener("click", function () {
            workersPopup.style.display = "flex";
        });

        // Close the popup when clicking the close button
        closePopup.addEventListener("click", function () {
            workersPopup.style.display = "none";
        });
    } else {
        console.error("One or more elements not found!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const openVictimsPopup = document.getElementById("open-victims-popup");
    const victimsPopup = document.getElementById("victims-popup");
    const closeVictimsPopup = document.getElementById("close-victims-popup");

    if (openVictimsPopup && victimsPopup && closeVictimsPopup) {
        // Show victims popup
        openVictimsPopup.addEventListener("click", function () {
            victimsPopup.style.display = "flex";
        });

        // Close victims popup
        closeVictimsPopup.addEventListener("click", function () {
            victimsPopup.style.display = "none";
        });
    } else {
        console.error("Victims popup elements not found!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const showDeveloperBtn = document.getElementById("show-developer");
    const developerInfo = document.getElementById("developer-info");

    if (showDeveloperBtn && developerInfo) {
        showDeveloperBtn.addEventListener("click", function () {
            if (developerInfo.style.display === "block") {
                developerInfo.style.display = "none"; // Hide if already open
            } else {
                developerInfo.style.display = "block"; // Show if closed
            }
        });
    }
});

