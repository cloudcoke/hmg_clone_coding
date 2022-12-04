const header = document.querySelector("header");
const inner = document.querySelector(".inner");
const headerOneDepList = document.querySelectorAll("nav > .one-dep > li");
const diffLine = document.querySelector(".diff-line");
const utils = document.querySelector(".utils");
const tLayoutList = document.querySelectorAll(".t-layout");

const removeActive = (list) => {
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("active");
  }
};

const tLayoutRemoveFlex = () => {
  for (let i = 0; i < tLayoutList.length; i++) {
    tLayoutList[i].style.display = "none";
  }
};

// 헤더에 마우스 오버시 active
const innerOverHandler = (e) => {
  if (e.target.classList.contains("diff")) {
    header.classList.remove("hover");
    tLayoutRemoveFlex();
    removeActive(headerOneDepList);
    removeActive(twoDepLi);
    const depth1Li = e.target.parentNode.classList;
    depth1Li.add("active");
    return;
  }

  if (e.target.classList.contains("depth1")) {
    removeActive(headerOneDepList);
    tLayoutRemoveFlex();
    removeActive(twoDepLi);
    twoDepList[1].children[1].classList.add("active");
    const depth1Li = e.target.parentNode.classList;
    depth1Li.add("active");
    const tLayOut = e.target.nextElementSibling;
    tLayOut.style.display = "flex";
  }
  if (e.target.parentNode.classList.contains("logo")) {
    header.classList.remove("hover");
    removeActive(headerOneDepList);
    tLayoutRemoveFlex();
  }
  if (e.target.parentNode.classList.contains("active")) {
    header.classList.add("hover");
  }
};

// 마우스 아웃시 hover 제거
const innerLeaveHandler = (e) => {
  if (header.classList.contains("hover")) {
    return;
  } else {
    removeActive(headerOneDepList);
    tLayoutRemoveFlex();
  }
};

const innerOutHandler = (e) => {
  if (e.target.classList.contains("inner")) {
    header.classList.remove("hover");
  }
  if (e.target.tagName === "NAV") {
    header.classList.remove("hover");
  }
};

inner.addEventListener("mouseover", innerOverHandler);
inner.addEventListener("mouseleave", innerLeaveHandler);
inner.addEventListener("mouseout", innerOutHandler);

// diff-line 색 없애기, utils 마우스 오버시 hover 제거
const utilsOverHandler = (e) => {
  header.classList.remove("hover");
  diffLine.parentNode.classList.remove("active");
  tLayoutRemoveFlex();
};

utils.addEventListener("mouseover", utilsOverHandler);

// 예약하기 이벤트
const reserve = document.querySelector(".btn-wrap > .btn");
const slideBox = document.querySelector(".slide-box");

const reserveHandler = (e) => {
  if (reserve.getAttribute("checked") === null) {
    reserve.setAttribute("checked", "checked");
    slideBox.style = "display: block; opacity:1; right: 0px; animation: slideBoxChecked 1s forwards alternate;";
  } else {
    reserve.removeAttribute("checked");
    slideBox.style = " opacity:0; right: 50px; animation: slideBoxUnChecked 0.7s forwards alternate;";
  }
};

reserve.addEventListener("click", reserveHandler);

// two-depth 검은바

const tLayoutListOverHandler = (e) => {
  header.classList.add("hover");
};

const tLayoutListOutHandler = (e) => {
  header.classList.remove("hover");
};

for (let i = 0; i < tLayoutList.length; i++) {
  tLayoutList[i].addEventListener("mouseover", tLayoutListOverHandler);
  tLayoutList[i].addEventListener("mouseout", tLayoutListOutHandler);
}

// two-depth 마우스 오버시
const twoDepList = document.querySelectorAll(".two-dep");
const twoDepLi = document.querySelectorAll(".two-dep > li");

const twoDepListOverHandler = (e) => {
  if (e.target.classList.contains("depth2")) {
    removeActive(twoDepLi);
    e.target.parentNode.classList.add("active");
  }
};

for (let i = 0; i < twoDepList.length; i++) {
  twoDepList[i].addEventListener("mouseover", twoDepListOverHandler);
}

// thr-depth 마우스 오버, 아웃시
const thrDepList = document.querySelectorAll(".thr-dep");
const thrDepLi = document.querySelectorAll(".thr-dep > li");

const thrDepListOverHandler = (e) => {
  if (e.target.classList.contains("depth3")) {
    e.target.parentNode.classList.add("active");
  }
};

const thrDepListOutHandler = (e) => {
  if (e.target.classList.contains("thr-dep")) {
    removeActive(thrDepLi);
  }
};

for (let i = 0; i < thrDepList.length; i++) {
  thrDepList[i].addEventListener("mouseover", thrDepListOverHandler);
  thrDepList[i].addEventListener("mouseover", thrDepListOutHandler);
}
