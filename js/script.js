const tabBlock = document.querySelectorAll(".tabs");

const clearActive = (controls, contents) => {
    controls.forEach((control) => {
      control.classList.remove("active");
    });
    
    contents.forEach((content) => {
      content.classList.remove("active");
    });
};

const addActive = (controls, contents) => {
    controls.forEach((control, index) => {
      control.addEventListener("click", (link) => {
        link.preventDefault();
        clearActive(controls, contents);
        control.classList.add("active");
        contents[index].classList.add("active");
      });
    });
};

if (tabBlock.length) {
    tabBlock.forEach((element) => {
      const controls = element.querySelectorAll(".tabs-controls a");
      const contentBlocks = element.querySelectorAll(".tabs-content li");
      addActive(controls, contentBlocks);
    });
};

let writeUsLink = document.querySelector(".open-modal-write-us");
let mapLink = document.querySelector(".open-modal-map");
const modals = document.querySelectorAll(".modal");
let popupWriteUs = document.querySelector(".modal-write-us");
let popupMap = document.querySelector(".modal-map");
let closeWriteUsButton = popupWriteUs.querySelector(".button-close");
let closeMapButton = popupMap.querySelector(".button-close");

const clearModalShow = (modals) => {
  modals.forEach((modal) => {
    modal.classList.remove("show");
  });
};

writeUsLink.addEventListener("click", (link) => {
    link.preventDefault();
    clearModalShow(modals);
    popupWriteUs.classList.add("show");
});

mapLink.addEventListener("click", (link) => {
  link.preventDefault();
  clearModalShow(modals);
  popupMap.classList.add("show");
});


closeWriteUsButton.addEventListener("click", () => {
  clearModalShow(modals);
});

closeMapButton.addEventListener("click", () => {
  clearModalShow(modals);
});