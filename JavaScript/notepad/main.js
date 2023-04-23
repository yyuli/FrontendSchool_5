// 1. 사용자가 값을 입력하고, 완료 버튼을 누르면 메모가 추가된다.
const title = document.querySelector("#memo-title");
const contents = document.querySelector(".memo-contents");
const btnComplete = document.querySelector(".btn-complete");
const allMemo = [];

btnComplete.addEventListener("click", addMemo);
// title에 enter event 어떻게 달지? 왜 안 되지..
// title.addEventListener("keyup", function (event) {
//   if (event.keyCode == 13) {
//     addMemo();
//     console.log('출력');
//   }
// });

contents.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addMemo();
  }
});

function addMemo() {
  let memoObject = {
    title: title.value,
    contents: contents.value,
  };

  allMemo.push(memoObject);

  console.log(allMemo);

  title.value = "";
  contents.value = "";

  render();
}

function render() {
  const display = document.querySelector("#display");
  display.innerHTML = "";

  for (const item of allMemo) {
    const memoBox = document.createElement("div");
    const saveTitle = document.createElement("h2");
    const saveContents = document.createElement("p");
    const btnEdit = document.createElement("button");
    const btnDelete = document.createElement("button");

    memoBox.classList.add("memo-list");
    saveTitle.classList.add("ellipsis");
    btnEdit.setAttribute("type", "button");
    btnDelete.setAttribute("type", "button");
    saveContents.classList.add("multi-ellipsis");

    saveTitle.textContent = item.title;
    saveContents.textContent = item.contents;
    btnEdit.textContent = "수정";
    btnDelete.textContent = "삭제";

    display.appendChild(memoBox);
    memoBox.appendChild(saveTitle);
    memoBox.appendChild(saveContents);
    memoBox.appendChild(btnDelete);
    memoBox.appendChild(btnEdit);
  }
}
