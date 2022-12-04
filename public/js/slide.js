// slide 구현
const init = () => {
  let count = 1;
  let intervalId = 0;
  let renderStatus = "before";
  const slide1 = document.querySelector(".slide1");
  const slide2 = document.querySelector(".slide2");

  const img1 = `background: url("public/images/slider1.jpg") center center / cover no-repeat;`;
  const img2 = `background: url("public/images/slider2.jpg") center center / cover no-repeat;`;

  const animation = (animationName) => `animation: 1s ease 0s 1 alternate forwards running ${animationName}`;

  const firstDisplay = () => {
    slide1.style = `${img1} left:0; opacity:1;`;
    slideCircleBtnList[0].classList.add("active");
    slide1TxtDisplay();
  };

  const slide1Display = (animationName = "slideIn") => {
    renderStatus = "rendering";

    slide2.style = `${img2} opacity:0; ` + animation("slideDisplay");
    setTimeout(() => {
      slide2TxtHide();
      setTimeout(() => {
        slideCircleBtnList[0].classList.add("active");
        slideCircleBtnList[1].classList.remove("active");

        timer = setTimeout(() => {
          slide2.style = `${img2} left:100%; opacity:0; ` + animation("slideOut");
          slide1.style = `${img1} left:0; opacity:1; ` + animation(animationName);
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
        slideCircleBtnList[1].classList.add("active");
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

  const slide1TxtDisplay = () => {
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
      slide1Display("slideLeftIn");
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
