// Get current logged-in user
const user = JSON.parse(localStorage.getItem("currentUser"));

console.log("common.js loaded");
console.log(user);


// If user is not logged in
if (!user) {

    window.location.href = "loginpage.html";

}
else {

    // Create full name
    const displayName = user.firstname + " " + user.lastname;


    // Update profile name
    const profileName = document.getElementById("profileName");

    if (profileName) {
        profileName.textContent = displayName;
    }


    // Update profile email
    const profileEmail = document.getElementById("profileEmail");

    if (profileEmail) {
        profileEmail.textContent = user.email;
    }


    // Update welcome message
    const welcomeMessage = document.getElementById("welcomeMessage");

    if (welcomeMessage) {
        welcomeMessage.textContent = "Welcome back, " + displayName;
    }


    // Update avatar initials
    const avatar = document.getElementById("avatar");

    if (avatar) {

        const initials =
            user.firstname.charAt(0) +
            user.lastname.charAt(0);

        avatar.textContent = initials.toUpperCase();

    }
    const fullNameInput = document.getElementById("fullName");

    if (fullNameInput) {
        fullNameInput.value = displayName;
    }

    const emailInput = document.getElementById("email");

    if (emailInput) {
        emailInput.value = user.email;
    }

}



// Navigation

const overview = document.getElementById("overview");

if (overview) {

    overview.addEventListener("click", function(e){

        e.preventDefault();
        window.location.href = "overviewpage.html";

    });

}



const profile = document.getElementById("profile");

if (profile) {

    profile.addEventListener("click", function(e){

        e.preventDefault();
        window.location.href = "profilepage.html";

    });

}



const security = document.getElementById("security");

if (security) {

    security.addEventListener("click", function(e){

        e.preventDefault();
        window.location.href = "securitypage.html";

    });

}



const notification = document.getElementById("notification");

if (notification) {

    notification.addEventListener("click", function(e){

        e.preventDefault();
        window.location.href = "notificationpage.html";

    });

}



const help = document.getElementById("help");

if (help) {

    help.addEventListener("click", function(e){

        e.preventDefault();
        window.location.href = "helppage.html";

    });

}



// Logout

const logout = document.getElementById("logout");

if (logout) {

    logout.addEventListener("click", function(e){

        e.preventDefault();

        localStorage.removeItem("currentUser");

        window.location.href = "loginpage.html";

    });

}
