const friendButton = document.getElementById("friendshipButton");
const friendShipStatus = document.getElementById("friendshipStatus");
var isFriend = false;
friendButton.addEventListener("click", () => {
    //On clicking friend button we'll check whether they are already friend or not if
    //they are friends then remove from friend list otherwise add to friend list.
    if (!isFriend) {
        friendShipStatus.innerHTML = "Friends";
        friendShipStatus.style.color = "green"; 
        friendButton.innerHTML = "Remove Friend"
        isFriend = true;
    } else {
        friendShipStatus.innerHTML = "Strangers";
        friendShipStatus.style.color = "red"; 
        friendButton.innerHTML = "Add Friend"
        isFriend = false;
    }
})