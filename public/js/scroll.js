//  scroll 이벤트
const floatBtn = document.querySelector(".float-btns");
const fadeUpList = document.querySelectorAll("[data-aos=fade-up]");
const startPageY = window.pageYOffset;
// IntersectionObserver 설정
const options = {
  threshold: 0.5,
};

const callback1 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      fadeUpList[0].classList.remove("aos-init");
      fadeUpList[0].classList.add("aos-animate");
    }
  });
};
const callback2 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      fadeUpList[1].classList.remove("aos-init");
      fadeUpList[2].classList.remove("aos-init");
      fadeUpList[1].classList.add("aos-animate");
      fadeUpList[2].classList.add("aos-animate");
    }
  });
};
const callback3 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      fadeUpList[3].classList.remove("aos-init");
      fadeUpList[4].classList.remove("aos-init");
      fadeUpList[5].classList.remove("aos-init");
      fadeUpList[3].classList.add("aos-animate");
      fadeUpList[4].classList.add("aos-animate");
      fadeUpList[5].classList.add("aos-animate");
    }
  });
};

const observer1 = new IntersectionObserver(callback1, options);
const observer2 = new IntersectionObserver(callback2, options);
const observer3 = new IntersectionObserver(callback3, options);

// 시작화면의 위치가 처음이 아니라면 컨텐츠 모두 띄우기
if (startPageY >= 80) {
  for (let i = 0; i < fadeUpList.length; i++) {
    fadeUpList[i].classList.remove("aos-init");
    fadeUpList[i].classList.add("aos-animate");
  }
}
if (window.pageYOffset > 0) {
  header.classList.add("active");
}
const scrollLocationHandler = () => {
  if (window.scrollY > 10) {
    floatBtn.style = "visibility: visible; opacity: 1";
  } else {
    floatBtn.style = "visibility: hidden; opacity: 0";
  }
  //  시작화면의 위치가 처음이라면 해당 컨텐츠 위치로 이동했을 때 띄우기
  if (window.scrollY > 0) {
    header.classList.add("active");
  }
  if (startPageY < 80) {
    observer1.observe(fadeUpList[0]);
    observer2.observe(fadeUpList[1]);
    observer3.observe(fadeUpList[3]);
  }
  if (window.scrollY >= 2640) {
    floatBtn.classList.add("freeze");
  } else {
    floatBtn.classList.remove("freeze");
  }

  if (window.scrollY === 0) {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", scrollLocationHandler);
