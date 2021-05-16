function dropdownUser() {
  document.getElementById("dropdown-user").classList.toggle("show");
  console.log(document.getElementById("dropdown-user").classList);
}

window.onclick = function (event) {
  if (!event.target.matches(".header__user-arrow")) {
    let dropdowns = document.getElementsByClassName("dropdown__user-content");
    console.log(dropdowns);

    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      console.log(openDropdown);
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
