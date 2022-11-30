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
    const depth1Li = e.target.parentNode.classList;
    depth1Li.add("active");
    return;
  }
  if (e.target.classList.contains("depth1")) {
    removeActive(headerOneDepList);
    tLayoutRemoveFlex();
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
  //   console.log(e.target);
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
  //   console.log(e.target.classList);
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

// slide 구현

const init = () => {
  let count = 1;
  let intervalId = 0;
  const slide1 = document.querySelector(".slide1");
  const slide2 = document.querySelector(".slide2");

  const img1 = `background: url("/public/images/slider1.jpg") center center / cover no-repeat;`;
  const img2 = `background: url("/public/images/slider2.jpg") center center / cover no-repeat;`;

  const firstDisplay = () => {
    slide1.style = `${img1} left:0; opacity:1;`;
  };

  const slide1Display = () => {
    // clearInterval(intervalId);
    // console.log("one");
    slide2.style = `${img2} opacity:0; animation: 1s ease 0s 1 alternate forwards running slideDisplay`;
    timer = setTimeout(() => {
      slide2.style = `${img2} left:100%; opacity:0; animation: 1s ease 0s 1 alternate forwards running slideOut`;
      slide1.style = `${img1} left:0; opacity:1; animation: 1s ease 0s 1 alternate forwards running slideIn`;
    }, 1000);
  };

  const slide2Display = () => {
    // clearInterval(intervalId);
    // console.log("two");
    slide1.style = `${img1} opacity:0; animation: 1s ease 0s 1 alternate forwards running slideDisplay`;
    timer = setTimeout(() => {
      slide1.style = `${img1} left:100%; opacity:0; animation: 1s ease 0s 1 alternate forwards running slideOut`;
      slide2.style = `${img2} left:0%; opacity:1; animation: 1s ease 0s 1 alternate forwards running slideIn`;
    }, 1000);
  };

  const slide = () => {
    // slide1 보이기
    if (count === 0) {
      slide1Display();
      return (count = 1);
    }
    // slide2 보이기
    if (count === 1) {
      slide2Display();
      return (count = 0);
    }
  };
  // firstDisplay();
  // intervalId = setInterval(slide, 3000);
};

document.addEventListener("DOMContentLoaded", init);

const txtAreaList = document.querySelectorAll(".txt-area");
const c1 = document.querySelector("#c1");
const c2 = document.querySelector("#c2");
const triggerArrowAnimateList = document.querySelectorAll(".btn-wrap.trigger-arrow-animate > a");
const animation = (animationName) => `animation: 1s ease 0s 1 alternate forwards running ${animationName}`;
const area1 = txtAreaList[0];
const area2 = txtAreaList[1];
console.log(triggerArrowAnimateList[0].style);
// slide 1
// .txt-area => display:block; => display:none;
// .txt > p > span => top: 0px; => top: 80px;
// .txt-area > trigger-arrow-animate => opacity: 1; top: 0px; => opacity: 0 -> 1

const c1Handler = () => {
  txtAreaList[0].style = "display: block";
  // console.log(txtAreaList[0].style);
  console.dir(txtAreaList[0].children[0].children[0].children[0].style);
  txtAreaList[0].children[0].children[0].children[0].style = animation("slideTxtUp");
  setTimeout(() => {
    txtAreaList[0].children[0].children[1].children[0].style = animation("slideTxtUp");
    setTimeout(() => {
      txtAreaList[0].children[0].children[2].children[0].style = animation("slideTxtUp");
      setTimeout(() => {
        triggerArrowAnimateList[0].style = animation("slideOpacity1");
      }, 100);
    }, 100);
  }, 100);
};

const c2Handler = () => {
  txtAreaList[0].children[0].children[0].children[0].style = animation("slideTxtDown");
  setTimeout(() => {
    txtAreaList[0].children[0].children[1].children[0].style = animation("slideTxtDown");
    setTimeout(() => {
      txtAreaList[0].children[0].children[2].children[0].style = animation("slideTxtDown");
      setTimeout(() => {
        triggerArrowAnimateList[0].style = animation("slideOpacity2");
        txtAreaList[0].style = "display: none";
      }, 500);
    }, 100);
  }, 100);
};

c1.addEventListener("click", c1Handler);
c2.addEventListener("click", c2Handler);
