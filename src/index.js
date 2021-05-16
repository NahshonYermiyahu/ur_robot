function dropdownUser() {
  document.getElementById("dropdown-user").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".header__user-arrow")) {
    let dropdowns = document.getElementsByClassName("dropdown__user-content");

    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function renderPopup5() {
  return (location.href = "#popup5");
}

function renderPopup4() {
  return (location.href = "#popup4");
}

function renderPopup3() {
  return (location.href = "#popup3");
}
function renderPopup2() {
  return (location.href = "#popup2");
}

function renderPopup1() {
  return (location.href = "#popup1");
}

const items = document.getElementsByClassName("item");

for (let item of items) {
  item.addEventListener("click", () => {
    item.classList.toggle("selected");
  });
}

const theme_btn = document.getElementById("checkbox-theme");
const body = document.getElementsByTagName("body");

theme_btn.addEventListener("click", () => {
  for (let item of body) {
    item.className = theme_btn.checked ? "dark-theme" : "light-theme";
  }
});

function sidebarBtn(btn) {
  const btns = document.getElementsByClassName("sidebar__item-btn");
  for (let i of btns) {
    i.classList.remove("activeSidebar");
  }

  btn.classList.toggle("activeSidebar");
}

function changeSidebar(btn) {
  document.getElementById("sidebar").classList.toggle("minSidebar");
  btn.classList.toggle("changeSidebar");
}
