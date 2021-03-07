// Refs
const pagBox = document.getElementById("pag-box");
const pagItem = document.querySelectorAll(".pag__item");
const pagBtn = document.querySelectorAll(".pag__btn");

// Active block on PageStart
pagBox.firstElementChild.classList.add("active");

//Listener
pagBox.addEventListener("click", (event) => {
  if (event.target.nodeName === "UL") return;

  const activeClass = pagBox.querySelector(".active");

  if (activeClass) activeClass.classList.remove("active");

  event.target.classList.add("active");
});

function pagPageBtnAdder(number) {
  const arr = [];

  for (let i = 0; i < number; i++) {
    const item = `<li class="pag__item"><button class="pag__btn">${
      i + 2
    }</button></li>`;

    arr.push(item);
  }

  pagBox.insertAdjacentHTML("beforeend", arr.join(""));

  const pages = pagBox.children;

  const show = (array, start, end) => {
    [...pages]
      .filter((el, idx) => idx < start || idx > end)
      .map((el) => el.classList.add("hidden"));
  };

  return show(pages, 0, 5);
}

pagPageBtnAdder(10);

const pageDesktop = (page) => console.log(Math.ceil(page / 9));
const pageTablet = (page) => console.log(Math.ceil(page / 8));
const pageMobile = (page) => console.log(Math.ceil(page / 4));
