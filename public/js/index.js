const header = document.querySelector("header");
const inner = document.querySelector(".inner");
const headerOneDepList = document.querySelectorAll("nav > .one-dep > li");
const headerOneDepListA = document.querySelectorAll("nav > .one-dep > li > a");
const diffLine = document.querySelector(".diff-line");
const utils = document.querySelector(".utils");

// 헤더에 마우스 오버시 active
const innerOverHandler = (e) => {
  //   console.log(e.target.classList.contains("depth1"));
  if (e.target.classList.contains("depth1")) {
    e.target.parentNode.classList.add("active");
    diffLine.parentNode.classList.remove("active");
  }
  if (e.target.classList.contains("diff-line")) {
    e.target.parentNode.classList.add("active");
  }
  if (e.target.tagName === "IMG") {
    return;
  }
  if (e.target.parentNode.classList.contains("active")) {
    header.classList.add("hover");
  }
};

// 헤더에 마우스 오버시 검은바
const innerOutHandler = (e) => {
  if (e.target.classList.contains("diff-line")) {
    return;
    // e.target.parentNode.classList.remove("active");
  }
  //   console.log(e.target.tagName);
  e.target.parentNode.classList.remove("active");
  if (e.target.tagName === "IMG") {
    header.classList.remove("hover");
  }
  if (e.target.tagName === "NAV") {
    header.classList.remove("hover");
  }
  //   console.log(e.target.parentNode);
};

inner.addEventListener("mouseover", innerOverHandler);
inner.addEventListener("mouseout", innerOutHandler);

// diff-line 색 없애기, 예약하기 이벤트
const utilsOverHandler = (e) => {
  diffLine.parentNode.classList.remove("active");
};

const utilsOutHandler = (e) => {};

utils.addEventListener("mouseover", utilsOverHandler);

const reserve = document.querySelector(".btn-wrap > .btn");
console.log(reserve);

const reserveHandler = (e) => {
  //   console.log(e.target.getAttribute("checked"));
  if (reserve.getAttribute("checked") === null) {
    reserve.setAttribute("checked", "checked");
  } else {
    reserve.removeAttribute("checked");
  }
};

reserve.addEventListener("click", reserveHandler);

// 헤더에 마우스 오버시 LNB 보이기

// const overHandler = (e) => {
//   if (e.target.classList.contains("diff")) {
//     return;
//   }
//   header.classList.add("hover");
//   e.target.parentNode.classList.add("active");
//   e.target.nextElementSibling.style.display = "flex";
// };

// const outHandler = (e) => {
//   if (e.target.classList.contains("diff")) {
//     return;
//   }
//   header.classList.remove("hover");
//   e.target.parentNode.classList.remove("active");
//   e.target.nextElementSibling.style.display = "none";
// };

// for (let i = 0; i < headerOneDepListA.length; i++) {
//   headerOneDepListA[i].addEventListener("mouseover", overHandler);
//   headerOneDepListA[i].addEventListener("mouseout", outHandler);
// }

// // 헤더가 선택되고 LNB 영역으로 마우스 오버시 유지
// const tlayout = document.querySelectorAll(".t-layout");

// const tlayoutOverHandler = (i) => {
//   return (e) => {
//     header.classList.add("hover");
//     tlayout[i].style.display = "flex";
//   };
// };

// const tlayoutOutHandler = (i) => {
//   return (e) => {
//     header.classList.remove("hover");
//     tlayout[i].style.display = "none";
//   };
// };

// for (let i = 0; i < tlayout.length; i++) {
//   tlayout[i].addEventListener("mouseover", tlayoutOverHandler(i));
//   tlayout[i].addEventListener("mouseout", tlayoutOutHandler(i));
// }

// // LNB twodep에 마우스 호버 시 thrdep 출력
// const twodep = document.querySelectorAll(".two-dep");

// const twodepOverHandler = (e) => {
//   if (e.target.classList.contains("depth2")) {
//     e.target.parentNode.classList.add("active");
//   }
//   if (e.target.classList.contains("hasChild")) {
//     console.dir(e.target);
//     e.target.nextElementSibling.style.display = "block";
//   }
// };

// const twodepOutHandler = (e) => {
//   if (e.target.classList.contains("depth2")) {
//     // e.target.parentNode.classList.remove("active");
//   }
// };

// for (let i = 0; i < twodep.length; i++) {
//   twodep[i].addEventListener("mouseover", twodepOverHandler);
//   twodep[i].addEventListener("mouseout", twodepOutHandler);
// }
