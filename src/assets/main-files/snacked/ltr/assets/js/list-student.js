const root = document.documentElement;
const dropdownTitleIcon = document.querySelector(".dropdown-title-icon");
const dropdownText = document.querySelector(".dropdown-text");
const dropdownSubText = document.querySelector(".dropdown-subtext");
const dropdownList = document.querySelector(".dropdown-list");
const mainButton = document.querySelector(".main-button");
const floatingIcon = document.querySelector(".floating-icon");

const setDropdownProps = (deg, ht, opacity) => {
  root.style.setProperty("--rotate-arrow", deg !== 0 ? deg + "deg" : 0);
  root.style.setProperty("--dropdown-height", ht !== 0 ? ht + "rem" : 0);
  root.style.setProperty("--list-opacity", opacity);
};

mainButton.addEventListener("click", () => {
  const listWrapperSizes = 3.5; // margins, paddings & borders
  const numberOfItems = dropdownList.getElementsByTagName("li").length;
  const dropdownOpenHeight = 4.6 * numberOfItems + listWrapperSizes;
  const currDropdownHeight =
    root.style.getPropertyValue("--dropdown-height") || "0";

  currDropdownHeight === "0"
    ? setDropdownProps(180, dropdownOpenHeight, 1)
    : setDropdownProps(0, 0, 0);
});

dropdownList.addEventListener("click", (e) => {
  const clickedItemText = e.target.innerText.trim();
  dropdownSubText.innerHTML = clickedItemText;
  setDropdownProps(0, 0, 0);
});

window.onclick = function (e) {
  if (
    !document.getElementsByClassName("dropdown-container")[0].contains(e.target)
  ) {
    setDropdownProps(0, 0, 0);
  }
};
