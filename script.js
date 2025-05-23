
// Toggle Dropdown
function toggleDropdown() {
    let dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Save User Details
document.getElementById("saveBtn").addEventListener("click", function () {
    let fullName = document.getElementById("fullName").value.trim();
    let mobileNumber = document.getElementById("mobileNumber").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');

    if (fullName !== "" && mobileNumber !== "" && gender) {
        // Check if the same user is logging in again
        let previousUser = localStorage.getItem("savedName");

        if (previousUser && previousUser !== fullName) {
            // Clear old data if a new user logs in
            localStorage.clear();
        }

        // Save new user data
        localStorage.setItem("savedName", fullName);
        localStorage.setItem("savedGender", gender.value);
        localStorage.setItem("savedMobile", mobileNumber);

        // Update Displayed Name in Navbar
        document.getElementById("displayedName").textContent = fullName;

        // Close dropdown after saving
        document.getElementById("dropdownMenu").style.display = "none";
    } else {
        alert("Please enter all details.");
    }
});

// Logout Button Click
document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("savedName");  // Clear saved name
    localStorage.removeItem("savedGender"); 
    localStorage.removeItem("savedMobile"); 
    
    window.location.href = "index.html"; // Redirect to index.html
});

// Load Saved Data on Page Load
window.onload = function () {
    let savedName = localStorage.getItem("savedName");

    if (savedName) {
        document.getElementById("displayedName").textContent = savedName;
    }
};
