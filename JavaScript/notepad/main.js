"use strict";

const title = document.querySelector("#memo-title");
const contents = document.querySelector(".memo-contents");
const btnComplete = document.querySelector(".btn-complete");

let allMemo = JSON.parse(localStorage.getItem("allMemo"));

btnComplete.addEventListener("click", addMemo);

function render() {
  const display = document.querySelector("#display");
  display.innerHTML = "";

  if (allMemo) {
    for (const item of allMemo) {
      const memoBox = document.createElement("div");
      const saveTitle = document.createElement("h2");
      const saveContents = document.createElement("p");
      const btnEditEl = document.createElement("button");
      const btnDeleteEl = document.createElement("button");

      memoBox.classList.add("memo-list");

      saveTitle.classList.add("ellipsis");
      saveTitle.textContent = item.title;

      saveContents.classList.add("multi-ellipsis");
      saveContents.textContent = item.contents;

      btnEditEl.setAttribute("type", "button");
      btnEditEl.textContent = "수정";
      btnEditEl.setAttribute(
        "onclick",
        `edit('${item.id}', '${item.title}', '${item.contents}')`
      );

      btnDeleteEl.setAttribute("type", "button");
      btnDeleteEl.setAttribute("onclick", `remove('${item.id}')`);
      btnDeleteEl.textContent = "삭제";

      display.appendChild(memoBox);
      memoBox.appendChild(saveTitle);
      memoBox.appendChild(saveContents);
      memoBox.appendChild(btnDeleteEl);
      memoBox.appendChild(btnEditEl);
    }
  }
}

render();

let editId;
let isEditedMemo = false;
function edit(memoId, editTitle, editContent) {
  editId = memoId;
  isEditedMemo = true;
  btnComplete.textContent = "수정";
  title.value = editTitle;
  contents.value = editContent;
  title.focus();
}

function addMemo() {
  let userTitle = title.value.trim();
  let userContent = contents.value;
  let memoInfo;

  if (userTitle) {
    if (!isEditedMemo) {
      if (!allMemo) {
        allMemo = [];
      }
      memoInfo = {
        id: randomID(),
        title: title.value,
        contents: contents.value,
      };
      allMemo.push(memoInfo);
    } else {
      isEditedMemo = false;
      for (let i = 0; i < allMemo.length; i++) {
        if (allMemo[i].id === editId) {
          allMemo[i].title = userTitle;
          allMemo[i].contents = userContent;
        }
      }
      btnComplete.textContent = "완료";
    }
    title.value = "";
    contents.value = "";
  } else {
    title.focus();
  }

  localStorage.setItem("allMemo", JSON.stringify(allMemo));
  render();
}

function remove(id) {
  for (let i = 0; i < allMemo.length; i++) {
    if (allMemo[i].id === id) {
      allMemo.splice(i, 1);
    }
  }
  isEditedMemo = false;
  localStorage.setItem("allMemo", JSON.stringify(allMemo));
  render();
}

function randomID() {
  return "_" + Math.random().toString(36).substring(2, 9);
}
