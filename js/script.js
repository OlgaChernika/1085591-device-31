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
      control.addEventListener("click", (evt) => {
        evt.preventDefault();
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

const writeUsLink = document.querySelector(".open-modal-write-us");
const mapLink = document.querySelector(".open-modal-map");
const modals = document.querySelectorAll(".modal");
const popupWriteUs = document.querySelector(".modal-write-us");
const popupMap = document.querySelector(".modal-map");
const closeWriteUsButton = popupWriteUs.querySelector(".button-close");
const closeMapButton = popupMap.querySelector(".button-close");

const clearModalShow = (modals) => {
  modals.forEach((modal) => {
    modal.classList.remove("show");
  });
};

writeUsLink.addEventListener("click", (evt) => {
    evt.preventDefault();
    clearModalShow(modals);
    popupWriteUs.classList.add("show");
});

mapLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  clearModalShow(modals);
  popupMap.classList.add("show");
});


closeWriteUsButton.addEventListener("click", () => {
  clearModalShow(modals);
});

closeMapButton.addEventListener("click", () => {
  clearModalShow(modals);
});