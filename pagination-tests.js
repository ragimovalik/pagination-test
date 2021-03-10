const pagBox = document.getElementById("pag-box");
const pagItem = document.querySelectorAll(".pag__item");
const pagBtn = document.querySelectorAll(".pag__btn");

pagBox.firstElementChild.classList.add("active");

pagBox.addEventListener("click", ({ target }) => {
  const items = pagItem;
  console.log(items);

  if (target.nodeName === "DIV") return;

  const activeClass = pagBox.querySelector(".active");

  if (activeClass) activeClass.classList.remove("active");

  target.classList.add("active");

  // pagItem.classList.add('active')

  console.log(target.nodeName);
  console.log(target.textContent);

  if (target.textContent === "Next")
    for (let i = 1; i < items.length - 1; i++) {
      const element = items[i];
      element.textContent = +element.textContent + 5;
    }
});

const pageDesktop = (page) => console.log(Math.ceil(page / 9));
const pageTablet = (page) => console.log(Math.ceil(page / 8));
const pageMobile = (page) => console.log(Math.ceil(page / 4));
