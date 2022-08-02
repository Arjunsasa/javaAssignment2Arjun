userProfile = {firstName : "Steve", lastName : "Tan", email : "steve.tan@gmail.com", phone : "93851853", telegram : "@steve.tan"};
document.querySelector("button").onclick = function() {fullN()};
function fullN() {
    document.querySelector(".fullName").innerHTML = "Full Name : " + userProfile.firstName + " " + userProfile.lastName;
    document.querySelector(".email").innerHTML = "Email : " + userProfile.email;
    document.querySelector(".phone").innerHTML = "Phone : " + userProfile.phone;
    document.querySelector(".telegram").innerHTML = "Telegram : " + userProfile.telegram;
};