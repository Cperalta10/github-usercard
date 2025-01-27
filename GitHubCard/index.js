/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
    //
*/
import axios from "axios";

const followersArray = [
  "Criscosmoes",
  "Csandrade1",
  "justsml",
  "luishrd",
  "bigknell",
  "Cperalta10",
];

for (let i = 0; i < followersArray.length; i++) {
  createProfiles(followersArray[i]);
}

function createProfiles(people) {
  axios
    .get(`https://api.github.com/users/${people}`)
    .then((res) => {
      const finalCard = cardMaker(res.data);
      document.querySelector(".cards").appendChild(finalCard);
    })
    .catch((err) => {
      console.err(err);
    });
}
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
        <a href={address to users github page}>{address to users github page}</a>
          </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(singleObj) {
  const divCard = document.createElement("div");
  const userImg = document.createElement("img");
  const divInfo = document.createElement("div");
  const NameOfUser = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const addressLink = document.createElement("a");
  const followerCount = document.createElement("p");
  const followingCount = document.createElement("p");
  const bio = document.createElement("p");

  divCard.classList.add("card");
  divInfo.classList.add("card-info");
  NameOfUser.classList.add("name");
  username.classList.add("username");

  userImg.src = singleObj["avatar_url"];
  NameOfUser.textContent = singleObj.name;
  username.textContent = singleObj.login;
  location.textContent = "Location: ";
  profile.textContent = "Profile: ";
  addressLink.href = singleObj["html_url"];
  addressLink.textContent = `${singleObj["html_url"]}`;
  followerCount.textContent = `Followers: ${singleObj["followers_url"]}`;
  followingCount.textContent = `Following: ${singleObj["following_url"]}`;
  bio.textContent = `Bio: ${singleObj.bio}`;

  divCard.appendChild(userImg);
  divCard.appendChild(divInfo);
  divInfo.appendChild(NameOfUser);
  divInfo.appendChild(username);
  divInfo.appendChild(location);
  divInfo.appendChild(profile);
  divInfo.appendChild(followerCount);
  divInfo.appendChild(followingCount);
  divInfo.appendChild(bio);
  profile.appendChild(addressLink);

  return divCard;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
