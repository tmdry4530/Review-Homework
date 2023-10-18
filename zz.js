window.onload = function () {
  loadComments();
  updateCommentCount();
};

function updateCommentCount() {
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

  displayComment(newComment);
  updateCommentCount();
}

function loadComments() {
  let comments;
  if (localStorage.getItem("comments")) {
    comments = JSON.parse(localStorage.getItem("comments"));
  } else {
    comments = [];
  }
  for (let i = 0; i < comments.length; i++) {
    displayComment(comments[i]);
  }
}

function displayComment(comment) {
  const container = document.getElementById("container");

  const user_comment_layer = document
    .getElementById("user_comment")
    .cloneNode(false);

  user_comment_layer.classList.add("comment-" + comment.id);
  user_comment_layer.style.display = "block";
  user_comment_layer.querySelector(".user_id").innerText = "User" + comment.id;

  const commentTextElement = user_comment_layer.querySelector(".comment_text");
  commentTextElement.textContent = comment.text;
  commentTextElement.id = "comment-text-" + comment.id;

  const editInputField = user_comment_layer.querySelector(".edit_input");
  const saveButton = user_comment_layer.querySelector(".save_button");

  if (saveButton) {
    saveButton.addEventListener("click", function () {
      updateComment(comment.id, editInputField.value);
      const textNode = document.getElementById("comment-text-" + comment.id);
      if (textNode) {
        textNode.textContent = editInputField.value;
        textNode.style.display = "block";
        editInputField.style.display = "none";
        saveButton.style.display = "none";
      }
    });
  }

  user_comment_layer.querySelector(".date").innerText = comment.date;
  const modifyButton = user_comment_layer.querySelector(".modify");
  if (modifyButton) {
    modifyButton.addEventListener("click", function () {
      showEditInput(comment.id);
    });
  }
  const deleteButton = user_comment_layer.querySelector(".delete");
  if (deleteButton) {
    deleteButton.addEventListener("click", function () {
      remove(comment.id);
    });
  }
  container.appendChild(user_comment_layer);
}
function showEditInput(id) {
  const textNode = document.getElementById("comment-text-" + id);

  if (textNode) {
    textNode.style.display = "none";
    const editArea = textNode.parentNode;
    const editInputField = editArea.querySelector(".edit_input");
    if (editInputField) {
      editInputField.style.display = "block";
      editInputField.value = textNode.textContent;
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
  updateCommentCount();
}
