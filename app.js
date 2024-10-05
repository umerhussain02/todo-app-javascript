const textInput = document.getElementById("text");
const list = document.getElementById("list");

function addTodo() {
  //   create li tag and set input value in li tag
  const li = document.createElement("li");
  li.innerText = textInput.value;
  li.setAttribute("class", "box");

  //   create delete button
  const delBtn = document.createElement("button");
  delBtn.innerText = "DELETE";
  delBtn.setAttribute("class", "btn");
  delBtn.setAttribute("onclick", "deleteItem(this)");

  //   create edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.setAttribute("onclick", "editItem(this)");

  //   add li and buttons in ul
  list.appendChild(li);
  li.appendChild(delBtn);
  li.appendChild(editBtn);
  textInput.value = "";

  //   console.log(li);
}

function deleteItem(e) {
  e.parentNode.remove();
}

function deleteAll() {
  list.innerHTML = "";
}

function editItem(e) {
  let liVal = e.parentNode.firstChild.nodeValue;
  let editVal = prompt("Edit value", liVal);

  e.parentNode.firstChild.nodeValue = editVal;
}
