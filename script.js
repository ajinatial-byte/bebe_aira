const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");

const proposalPage = document.getElementById("proposal-page");
const thankyouPage = document.getElementById("thankyou-page");

acceptBtn.addEventListener("click", () => {
    proposalPage.classList.add("hidden");
    thankyouPage.classList.remove("hidden");
});

declineBtn.addEventListener("click", () => {

    alert("⚠️ Error");
    alert("❌ Invalid Choice");
    alert("💖 Please try again");

    const maxX = window.innerWidth - declineBtn.offsetWidth;
    const maxY = window.innerHeight - declineBtn.offsetHeight;

    declineBtn.style.position = "absolute";
    declineBtn.style.left = Math.random() * maxX + "px";
    declineBtn.style.top = Math.random() * maxY + "px";
});