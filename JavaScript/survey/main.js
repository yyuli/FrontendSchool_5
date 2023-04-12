const mainForm = document.querySelector("#mainForm");
const progressBar = mainForm.querySelector(".progress-bar");
const message = mainForm.querySelector(".msg-notice");
const input = mainForm.querySelectorAll("input");
const btnReset = mainForm.querySelector('button[type="reset"]');

mainForm.addEventListener("keyup", () => {
  let cnt = 0;
  input.forEach((item) => {
    if (item.validity.valid) {
      cnt += 1;
    }
  });

  switch (cnt) {
    case 1:
      message.innerHTML = "<strong>(1 / 5)</strong>";
      progressBar.setAttribute("value", "20");
      break;
    case 2:
      message.innerHTML = "<strong>(2 / 5)</strong>";
      progressBar.setAttribute("value", "40");
      break;
    case 3:
      message.innerHTML = "<strong>(3 / 5)</strong>";
      progressBar.setAttribute("value", "60");
      break;
    case 4:
      message.innerHTML = "<strong>(4 / 5)</strong>";
      progressBar.setAttribute("value", "80");
      break;
    case 5:
      message.innerHTML = "<strong>(5 / 5)</strong> 수고하셨습니다!";
      progressBar.setAttribute("value", "100");
      break;
    default:
      message.textContent = "설문지를 작성해 주세요.";
      progressBar.setAttribute("value", "0");
      break;
  }

  btnReset.addEventListener("click", () => {
    progressBar.setAttribute("value", "0");
    message.textContent = "설문지를 작성해 주세요.";
  });
});
