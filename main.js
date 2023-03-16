const list = document.querySelector("#list");
const selector = document.querySelector(".selector");
const selectField = document.querySelector("#selectField");

const infos = [
  { img: "images/facebook.png", p: "facebook" },
  { img: "images/instagram.png", p: "instagram" },
  { img: "images/pinterest.png", p: "pinterest" },
  { img: "images/twitter.png", p: "twitter" },
  { img: "images/whatsapp.png", p: "whatsapp" },
  { img: "images/youtube.png", p: "youtube" },
];
function createLi(infos) {
  const opts = infos
    .map((info) => {
      return `<li class="option">
      <img src="${info.img}" alt="${info.p} icon" />
      <p>${info.p}</p>
      </li>`;
    })
    .join("");
  list.innerHTML = opts;
  // get options after creatin them
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.addEventListener("click", selectOption);
  });
}
function addOptions() {
  createLi(infos);
}
function selectOption(e) {
  const text = e.currentTarget.lastElementChild.textContent;
  selectField.firstElementChild.textContent = text;
  selector.classList.remove("show-list");
  localStorage.setItem("item", text);
}

selectField.addEventListener("click", () => {
  selector.classList.toggle("show-list");
});

// setUpItems
window.addEventListener("DOMContentLoaded", function () {
  addOptions();
  const items = localStorage.getItem("item")
    ? localStorage.getItem("item")
    : "select social media";
  selectField.firstElementChild.textContent = items;
});
