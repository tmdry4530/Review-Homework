window.onload = function () {
  loadComments();
  commentCount();
};

function commentCount() {
  let comments;
  if (localStorage.getItem("comments")) {
    comments = JSON.parse(localStorage.getItem("comments"));
  } else {
    comments = [];
  }
  document.getElementById("comment_count").innerText = comments.length;
}

function addComment() {
  const comment_area = document.getElementById("comment_area");
  if (localStorage.getItem("comments")) {
    comments = JSON.parse(localStorage.getItem("comments"));
  } else {
    comments = [];
  }

  const newComment = {
    id: comments.length,
    text: comment_area.value,
    date: new Date().toISOString().slice(0, 10),
  };

  comments.push(newComment);
  localStorage.setItem("comments", JSON.stringify(comments));

  viewComment(newComment);
  commentCount();
}

function loadComments() {
  let comments;
  if (localStorage.getItem("comments")) {
    comments = JSON.parse(localStorage.getItem("comments"));
  } else {
    comments = [];
  }
  for (let i = 0; i < comments.length; i++) {
    viewComment(comments[i]);
  }
}

function viewComment(comment) {
  const container = document.getElementById("container");

  const userCommentLayer = document.createElement("div");
  userCommentLayer.classList.add("comment-" + comment.id, "user_comment");
  userCommentLayer.style.display = "block";

  const userId = document.createElement("div");
  userId.classList.add("user_id");
  userId.innerText = "User" + comment.id;
  userCommentLayer.appendChild(userId);

  const commentArea = document.createElement("div");
  commentArea.classList.add("comment_area");

  const commentElement = document.createElement("span");
  commentElement.classList.add("comment_text");
  commentElement.id = "comment-text-" + comment.id;
  commentElement.textContent = comment.text;
  commentArea.appendChild(commentElement);

  const modifyInput = document.createElement("input");
  modifyInput.type = "text";
  modifyInput.classList.add("modify_input");
  modifyInput.style.display = "none";
  commentArea.appendChild(modifyInput);

  const saveButton = document.createElement("button");
  saveButton.classList.add("save_button");
  saveButton.innerText = "✔️";
  saveButton.style.display = "none";
  commentArea.appendChild(saveButton);

  const modifyButton = document.createElement("button");
  modifyButton.classList.add("modify");
  modifyButton.innerText = "✏️";
  commentArea.appendChild(modifyButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerText = "🗑️";
  commentArea.appendChild(deleteButton);

  userCommentLayer.appendChild(commentArea);

  const date = document.createElement("div");
  date.classList.add("date");
  date.innerText = comment.date;
  userCommentLayer.appendChild(date);

  container.appendChild(userCommentLayer);

  saveButton.addEventListener("click", function () {
    updateComment(comment.id, modifyInput.value);
    const textCopy = document.getElementById("comment-text-" + comment.id);
    if (textCopy) {
      textCopy.textContent = modifyInput.value;
      textCopy.style.display = "block";
      modifyInput.style.display = "none";
      saveButton.style.display = "none";
    }
  });

  modifyButton.addEventListener("click", function () {
    const textCopy = document.getElementById("comment-text-" + comment.id);
    if (textCopy) {
      textCopy.style.display = "none";
      modifyInput.style.display = "block";
      modifyInput.value = textCopy.textContent;
      saveButton.style.display = "block";
    }
  });

  deleteButton.addEventListener("click", function () {
    remove(comment.id);
    const commentElement = document.querySelector(".comment-" + comment.id);
    if (commentElement) {
      commentElement.remove();
    }
    updateCommentCount();
  });
}

function showInput(id) {
  const textCopy = document.getElementById("comment-text-" + id);

  if (textCopy) {
    textCopy.style.display = "none";
    const editArea = textCopy.parentNode;
    const modifyInput = editArea.querySelector(".edit_input");
    if (modifyInput) {
      modifyInput.style.display = "block";
      modifyInput.value = textCopy.textContent;
    }
    let saveButton = editArea.querySelector(".save_button");
    if (saveButton) {
      saveButton.style.display = "block";
    }
  }
}

function updateComment(id, newText) {
  const comments = JSON.parse(localStorage.getItem("comments"));
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].id == id) {
      comments[i].text = newText;
      localStorage.setItem("comments", JSON.stringify(comments));
      break;
    }
  }
}

function remove(id) {
  const comments = JSON.parse(localStorage.getItem("comments"));
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].id == id) {
      comments.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("comments", JSON.stringify(comments));
  const commentElement = document.querySelector(".comment-" + id);
  if (commentElement) {
    commentElement.remove();
  }
  commentCount();
}
