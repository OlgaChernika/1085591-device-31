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
const userNameInput = popupWriteUs.querySelector(".user-name-input");
const userLoginInput = popupWriteUs.querySelector(".user-email-input");
const writeUsForm = popupWriteUs.querySelector(".modal-form");

const clearModalShow = () => {
  document.querySelector(".modal.show").classList.remove("show");
  clearOverlay();
};

const clearOverlay = () => {
  overlay.classList.remove("show");
};

writeUsLink.addEventListener("click", (evt) => {
    evt.preventDefault();
    overlay.classList.add("show");
    popupWriteUs.classList.add("show");
    userNameInput.focus();
    document.addEventListener("click", onDocumentClick);
});

mapLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  overlay.classList.add("show");
  popupMap.classList.add("show");
  popupMap.querySelector(".button-close").focus();
  document.addEventListener("click", onDocumentClick);
});

const onDocumentClick = ({target}) => {
  if (target.closest(".button-close") || target.closest(".overlay")) {
    clearModalShow(modals);
    clearOverlay();
    popupWriteUs.classList.remove("error");
    document.removeEventListener("click", onDocumentClick);
  };
};

window.addEventListener("keydown", (evt) => {
  if (evt.key === "Esc" || evt.key === "Escape") {
    evt.preventDefault();
    clearModalShow(modals);
    popupWriteUs.classList.remove("error");
  };
});

writeUsForm.addEventListener("submit", (evt) => {
  if (!userLoginInput.value) {
    evt.preventDefault();
    popupWriteUs.classList.remove("error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("error");
    userLoginInput.focus();
  };
});
