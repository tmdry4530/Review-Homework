window.onload = function () {};

function addComment() {
  const comment_area = document.querySelector("#comment_area");
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

  viewComment();
  commentCount();
}

function loadComment() {
  let comments;
  if (localStorage.getItem("comments")) {
    comments = JSON.parse(localStorage.getItem("comments"));
  } else {
    comments = [];
  }
}

function viewComment(comment) {}

function updateComment(id) {}

function deleteComment() {}

function commentCount() {
  let comments;
  if (localStorage.getItem("comments")) {
    comments = JSON.parse(localStorage.getItem("comments"));
  } else {
    comments = [];
  }
  document.querySelector("#comment_count").innerHTML = comments.length;
}
