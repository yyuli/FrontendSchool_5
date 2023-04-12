const inpPicker = document.querySelectorAll(".inp-picker");
const root = document.querySelector(":root");

inpPicker.forEach((item) => {
  item.addEventListener("input", () => {
    const name = `--main-${item.dataset.id}`;
    root.style.setProperty(name, item.value);
  });
});
