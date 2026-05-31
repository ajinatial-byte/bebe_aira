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

    declineBtn.style.position = "absolute";

    declineBtn.style.left =
        Math.random() * (window.innerWidth - 150) + "px";

    declineBtn.style.top =
        Math.random() * (window.innerHeight - 100) + "px";
});
