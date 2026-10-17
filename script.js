
const API_URL = "http://localhost:5000/api/auth";

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const registerMessage = document.getElementById("registerMessage");
const loginMessage = document.getElementById("loginMessage");
const profileSection = document.getElementById("profileSection");
const profileInfo = document.getElementById("profileInfo");
const logoutButton = document.getElementById("logoutButton");

let authToken = null;

// Register
registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    registerMessage.textContent = "Registering...";

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: document.getElementById("username").value.trim(),
                email: document.getElementById("registerEmail").value.trim(),
                password: document.getElementById("registerPassword").value
            })
        });

        const data = await response.json();
        registerMessage.textContent = data.message;

        if (response.ok) {
            registerForm.reset();
        }
    } catch (error) {
        registerMessage.textContent =
            "Could not connect to the server. Is it running?";
    }
});

// Login
loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    loginMessage.textContent = "Logging in...";

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: document.getElementById("loginEmail").value.trim(),
                password: document.getElementById("loginPassword").value
            })
        });

        const data = await response.json();

        if (!response.ok) {
            loginMessage.textContent = data.message;
            return;
        }

        authToken = data.token;
        loginMessage.textContent = data.message;
        loginForm.reset();

        await loadProfile();
    } catch (error) {
        loginMessage.textContent =
            "Could not connect to the server. Is it running?";
    }
});

// Load protected profile
async function loadProfile() {
    try {
        const response = await fetch(`${API_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });

        const data = await response.json();

        if (!response.ok) {
            profileInfo.textContent = data.message;
            return;
        }

        profileInfo.textContent =
            `Username: ${data.user.username} | Email: ${data.user.email}`;

        profileSection.hidden = false;
    } catch (error) {
        profileInfo.textContent = "Could not load your profile.";
        profileSection.hidden = false;
    }
}

// Logout
logoutButton.addEventListener("click", () => {
    authToken = null;
    profileSection.hidden = true;
    profileInfo.textContent = "";
    loginMessage.textContent = "You have logged out.";
});

