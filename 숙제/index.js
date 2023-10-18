window.onload = function () {
  loadComments();
  updateComment();
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
    date: new Date().toISOString.slice(0, 10),
  };

  comments.push(newComment);
  localStorage.setItem("comments", JSON.stringify(comments));

  updateCommentCount();
  displayComment(newComment);
}

function loadComments() {
  let comments;
  if (localStorage.getItem("comments")) {
    comments = JSON.parse(localStorage.getItem("comments"));
  } else {
    comment = [];
  }
  for (let i = 0; i < comments.length; i++) {
    displayComment(comments[i]);
  }
}

function displayComment(comment) {
  const container = document.getElementById("container");

  const user_comment_layer = document.getElementById("user_comment");
}
