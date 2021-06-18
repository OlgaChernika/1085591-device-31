const tabBlock = document.querySelectorAll(".tabs");

const clearActive = (controls, contents) => {
    controls.forEach((control) => {
      control.classList.remove("active");
    });
    
    contents.forEach((content) => {
      content.classList.remove("active");
    });
}

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