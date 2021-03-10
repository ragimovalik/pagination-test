const pagBox = document.getElementById("pag-box");
const pagItem = document.querySelectorAll(".pag__item");
const pagBtn = document.querySelectorAll(".pag__btn");

// pagBox.firstElementChild.classList.add("active");
const firstEl = pagBox.firstElementChild;
firstEl.nextElementSibling.classList.add("active");

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
    for (let i = 2; i < items.length - 1; i++) {
      const element = items[i];
      element.textContent = +element.textContent + 5;
    }

  if (target.textContent === "Prev")
    for (let i = 2; i < items.length - 1; i++) {
      const element = items[i];
      element.textContent = +element.textContent - 5;
    }
});

//========================================================
const arr = new Array();

function arrayMaker(number) {
  for (let i = 0; i < number; i++) {
    arr.push(i);
  }

  return arr;
}

// arrayMaker(10);
// console.log(arrayMaker(20));

const november = (start, end, arr1) => {
  if (arr1.length < end) arrayMaker(end);

  return arr1.filter((el, idx, array) => idx >= start - 1 && idx < end);
};

console.log(november(25, 35, arr), arr);