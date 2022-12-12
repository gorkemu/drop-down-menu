const dropdownButton = document.querySelector(".dropdown-btn");
dropdownButton.addEventListener("click", () => {
  document.querySelector(".dropdown-content").classList.toggle("visible");
});

window.addEventListener("click", (e) => {
  if (e.target !== dropdownButton) {
    document.querySelector(".dropdown-content").classList.remove("visible");
  }
});
