const swiperSlideList = document.querySelectorAll(".swiper-slide");
const swiperSlideBtnList = document.querySelectorAll(".btn-tab");

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
