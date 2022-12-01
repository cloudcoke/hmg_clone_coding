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
  let renderStatus = "before";
  const slide1 = document.querySelector(".slide1");
  const slide2 = document.querySelector(".slide2");

  const img1 = `background: url("/public/images/slider1.jpg") center center / cover no-repeat;`;
  const img2 = `background: url("/public/images/slider2.jpg") center center / cover no-repeat;`;

  const animation = (animationName) => `animation: 1s ease 0s 1 alternate forwards running ${animationName}`;

  const firstDisplay = () => {
    slide1.style = `${img1} left:0; opacity:1;`;
    slideCircleBtnList[0].classList.add("active");
    slide1TxtDisplay();
  };

  const slide1Display = () => {
    // clearInterval(intervalId);
    // console.log("one");
    renderStatus = "rendering";

    slide2.style = `${img2} opacity:0; ` + animation("slideDisplay");
    setTimeout(() => {
      slide2TxtHide();
      setTimeout(() => {
        if (!slideCircleBtnList[0].classList.contains("active")) {
          slideCircleBtnList[0].classList.add("active");
        }
        slideCircleBtnList[1].classList.remove("active");

        timer = setTimeout(() => {
          slide2.style = `${img2} left:100%; opacity:0; ` + animation("slideOut");
          slide1.style = `${img1} left:0; opacity:1; ` + animation("slideIn");
          setTimeout(() => {
            slide1TxtDisplay();
            renderStatus = "finish";
          }, 1000);
        }, 2000);
      }, 1000);
    }, 0);
  };

  const slide2Display = () => {
    renderStatus = "rendering";

    slide1.style = `${img1} opacity:0; ` + animation("slideDisplay");
    setTimeout(() => {
      slide1TxtHide();
      setTimeout(() => {
        if (!slideCircleBtnList[1].classList.contains("acitve")) {
          slideCircleBtnList[1].classList.add("active");
        }
        slideCircleBtnList[0].classList.remove("active");
        timer = setTimeout(() => {
          slide1.style = `${img1} left:100%; opacity:0; ` + animation("slideOut");
          slide2.style = `${img2} left:0%; opacity:1; ` + animation("slideIn");
          setTimeout(() => {
            silde2TxtDisplay();
            renderStatus = "finish";
          }, 1000);
        }, 2000);
      }, 1000);
    }, 0);
  };

  // slide 글
  const txtAreaList = document.querySelectorAll(".txt-area");
  const area1 = txtAreaList[0];
  const area2 = txtAreaList[1];

  const txtPSpanArea1 = document.querySelectorAll(".txt-area1 > .txt > p > span");
  const triggerArrowAnimateList = document.querySelectorAll(".btn-wrap.trigger-arrow-animate > a");

  const txtPSpanArea1HMG = txtPSpanArea1[0];
  const txtPSpanArea1Drive = txtPSpanArea1[1];
  const txtPSpanArea1Center = txtPSpanArea1[2];

  const txtPSpanArea2Program = document.querySelector(".txt-area2 > .txt > p > span");
  // slide 1
  // .txt-area => display:block; => display:none; [area1]
  // .txt > p > span => top: 0px; => top: 80px;
  // .txt-area > trigger-arrow-animate => opacity: 1; top: 0px; => opacity: 0 -> 1

  const slide1TxtDisplay = () => {
    // console.log(txtAreaList[0].style);
    area1.style = "display:block;";
    txtPSpanArea1HMG.style = "opacity: 0";
    txtPSpanArea1Drive.style = "opacity: 0";
    txtPSpanArea1Center.style = "opacity: 0";
    triggerArrowAnimateList[0].style = "color: #000";
    setTimeout(() => {
      txtPSpanArea1HMG.style = animation("slideTxtUp");
      setTimeout(() => {
        txtPSpanArea1Drive.style = animation("slideTxtUp");
        setTimeout(() => {
          txtPSpanArea1Center.style = animation("slideTxtUp");
          triggerArrowAnimateList[0].style = animation("slideOpacity1");
        }, 200);
      }, 200);
    }, 50);
  };

  const slide1TxtHide = () => {
    txtPSpanArea1HMG.style = animation("slideTxtDown");
    setTimeout(() => {
      txtPSpanArea1Drive.style = animation("slideTxtDown");
      setTimeout(() => {
        txtPSpanArea1Center.style = animation("slideTxtDown");
        triggerArrowAnimateList[0].style = animation("slideOpacity2");
        setTimeout(() => {
          area1.style = "display: none";
        }, 500);
      }, 200);
    }, 200);
  };

  const silde2TxtDisplay = () => {
    area2.style = "display:block";
    txtPSpanArea2Program.style = "opacity: 0";
    triggerArrowAnimateList[1].style = "color: #000";
    setTimeout(() => {
      txtPSpanArea2Program.style = animation("slideTxtUp");
      triggerArrowAnimateList[1].style = animation("slideOpacity1");
    }, 200);
  };

  const slide2TxtHide = () => {
    txtPSpanArea2Program.style = animation("slideTxtDown");
    triggerArrowAnimateList[1].style = animation("slideOpacity2");
    setTimeout(() => {
      {
        area2.style = "display: none";
      }
    }, 500);
  };

  // slideControl Btn
  const slideControl = document.querySelector(".btn-stop > .icon-arrow");

  const slideControlHandler = (e) => {
    // play
    if (e.target.parentNode.classList.contains("play")) {
      clearInterval(intervalId);
      intervalId = setInterval(slide, 8000);
      e.target.parentNode.classList.remove("play");
      e.target.parentNode.classList.add("stop");
      return;
    }
    // stop
    if (e.target.parentNode.classList.contains("stop")) {
      e.target.parentNode.classList.remove("stop");
      e.target.parentNode.classList.add("play");
      clearInterval(intervalId);
      intervalId = "clear";
      return;
    }
  };

  slideControl.addEventListener("click", slideControlHandler);

  const slideStop = () => {
    slideControl.parentNode.classList.remove("stop");
    slideControl.parentNode.classList.add("play");
    clearInterval(intervalId);
  };

  // slideControl Circle Btn
  const slideCircleBtnList = document.querySelectorAll(".pagination .num");
  const slideCircleBtnSpanList = document.querySelectorAll(".pagination .num span");

  const slideCircle1BtnHandler = (e) => {
    if (renderStatus === "rendering") {
      return;
    }
    clearInterval(intervalId);
    if (slideCircleBtnList[1].classList.contains("active")) {
      slideCircleBtnList[1].classList.remove("active");
      slideCircleBtnList[0].classList.add("active");
      slide1Display();
      slideStop();
      count = 1;
    }
  };

  const slideCircle2BtnHandler = (e) => {
    if (renderStatus === "rendering") {
      return;
    }
    clearInterval(intervalId);
    if (slideCircleBtnList[0].classList.contains("active")) {
      slideCircleBtnList[0].classList.remove("active");
      slideCircleBtnList[1].classList.add("active");
      slide2Display();
      slideStop();
      count = 0;
    }
  };

  slideCircleBtnList[0].addEventListener("click", slideCircle1BtnHandler);
  slideCircleBtnList[1].addEventListener("click", slideCircle2BtnHandler);

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
  slideCircleBtnList[0].classList.add("active");
  firstDisplay();
  intervalId = setInterval(slide, 8000);
};

document.addEventListener("DOMContentLoaded", init);

const snsBtn = document.querySelector(".btn-sns");
const snsBtnBox = document.querySelector(".float-sns .box");
const snsBtnList = document.querySelectorAll(".float-sns .box .icon");
const instagramBtn = snsBtnList[0];
const youtubeBtn = snsBtnList[1];
const facebookBtn = snsBtnList[2];

const animation = (animationName) => `animation: 0.5s ease 0s 1 alternate forwards running ${animationName}`;

const snsBtnHandler = () => {
  if (snsBtn.classList.contains("active")) {
    snsBtn.classList.remove("active");
    snsBtn.style = "background-position: 90% 90%";
    instagramBtn.style = animation("instagramBtnHide");
    youtubeBtn.style = animation("youtubeBtnHide");
    facebookBtn.style = animation("facebookBtnHide");
    setTimeout(() => {
      snsBtnBox.style = "display: none";
    }, 300);
  } else {
    snsBtn.classList.add("active");
    snsBtn.style = "background-position: 0% 0%";
    snsBtnBox.style = "display: block";
    instagramBtn.style = animation("instagramBtnDisplay");
    youtubeBtn.style = animation("youtubeBtnDisplay");
    facebookBtn.style = animation("facebookBtnDisplay");
  }
};

snsBtn.addEventListener("click", snsBtnHandler);

const swiperSlideList = document.querySelectorAll(".swiper-slide");
const swiperSlideBtnList = document.querySelectorAll(".btn-tab");

console.log(swiperSlideList);
console.log(swiperSlideBtnList);

swiperSlideBtnList[0].classList.add("active");
swiperSlideList[0].style = "opacity: 1";

const slideBtnHandler = (i) => {
  return (e) => {
    otherActiveDel(i, swiperSlideBtnList);
    swiperSlideBtnList[i].classList.add("active");
    swiperSlideList[i].style = "opacity: 1";
    otherImgDel(i, swiperSlideList);
  };
};

for (let i = 0; i < swiperSlideBtnList.length; i++) {
  swiperSlideBtnList[i].addEventListener("click", slideBtnHandler(i));
}

const otherActiveDel = (index, list) => {
  for (let i = 0; i < list.length; i++) {
    if (index === i) continue;
    list[i].classList.remove("active");
  }
};

const otherImgDel = (index, list) => {
  for (let i = 0; i < list.length; i++) {
    if (index === i) continue;
    list[i].style = "opacity: 0";
  }
};
