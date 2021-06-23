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
const overlay = document.querySelector(".overlay");
const popupWriteUs = document.querySelector(".modal-write-us");
const popupMap = document.querySelector(".modal-map");
const closeWriteUsButton = popupWriteUs.querySelector(".button-close");
const closeMapButton = popupMap.querySelector(".button-close");
const userNameInput = popupWriteUs.querySelector(".user-name-input");
const mapIframe = popupMap.querySelector(".map-iframe");

const clearModalShow = (modals) => {
  modals.forEach((modal) => {
    modal.classList.remove("show");
  });
};

const clearOverlay = (overlay) => {
  overlay.classList.remove("show");
};

writeUsLink.addEventListener("click", (evt) => {
    evt.preventDefault();
    clearModalShow(modals);
    overlay.classList.add("show");
    popupWriteUs.classList.add("show");
    userNameInput.focus();
});

mapLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  clearModalShow(modals);
  overlay.classList.add("show");
  popupMap.classList.add("show");
  mapIframe.focus();
});

closeWriteUsButton.addEventListener("click", () => {
  clearModalShow(modals);
  clearOverlay(overlay);
});

closeMapButton.addEventListener("click", () => {
  clearModalShow(modals);
  clearOverlay(overlay);
});