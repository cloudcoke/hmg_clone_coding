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
