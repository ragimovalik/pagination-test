const pagBox = document.getElementById("pag-box");
const pagItem = document.querySelectorAll(".pag__item");
const pagBtn = document.querySelectorAll(".pag__btn");
const screen = document.getElementById("screen");

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

  let clickTarget = target.textContent;

  // console.log(target.nodeName);
  console.log(clickTarget);

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
const itemsArray = new Array();

function arrayMaker(number) {
  for (let i = 0; i < number; i++) {
    itemsArray.push(i);
  }

  return itemsArray;
}

// arrayMaker(10);
// console.log(arrayMaker(20));

const devices = {
  desktop: 9,
  tablet: 8,
  mobile: 4,
};

const pageCutter = (onDeviceItems, startId) => {
  let endId = startId + onDeviceItems;

  if (itemsArray.length < endId) arrayMaker(endId);

  const sierra = itemsArray.filter(
    (el, idx, array) => idx >= startId && idx < endId
  );

  return (screen.textContent = sierra);
};

//pageCounter function ??

console.log(pageCutter(devices.desktop, 10), itemsArray);
