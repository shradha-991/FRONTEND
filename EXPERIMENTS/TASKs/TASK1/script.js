const appContainer = document.getElementById("app");
const skillContainers = document.getElementsByClassName("skill"); 
const allButtons = document.getElementsByTagName("button");

const firstThemeBtn = document.querySelector(".themeBtn");
const allThemeBtns = document.querySelectorAll(".themeBtn");

const cardElement = document.getElementById("displayName").closest("#profileCard");

const skillList = document.getElementById("skillList");
const skillListParent = skillList.parentElement; 
const skillListChildren = skillList.children;     

function logProfileCardChildren() {
    const profileCard = document.getElementById("profileCard");
    const children = profileCard.children;

    for (let child of children) {
        console.log("Node:", child.nodeName, "Classes:", child.classList.value);
    }
}//the challenge

logProfileCardChildren(); 

const nameInput = document.getElementById("nameInput");
const displayName = document.getElementById("displayName");

nameInput.addEventListener("input", () => {
    displayName.textContent = nameInput.value || "Your Name";
});

const bioInput = document.getElementById("bioInput");
const displayBio = document.getElementById("displayBio");

bioInput.addEventListener("input", () => {
    displayBio.innerText = bioInput.value || "Short bio goes here...";
});

console.log("textContent:", displayBio.textContent);
console.log("innerText:", displayBio.innerText);
