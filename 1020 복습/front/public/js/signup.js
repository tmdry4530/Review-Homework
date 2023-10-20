const signup = async (userinfo) => {
  try {
    const { data } = await axios.post("http://localhost:4000/users", userinfo);
    if (data.inserted) {
      location.href = "/";
    }
  } catch (e) {}
};

document.addEventListener("DOMContentLoaded", () => {
  const frm = document.querySelector("#frm");
  frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const {
      userid: { value: userid },
      userpw: { value: userpw },
      username: { value: username },
    } = e.target;
    const userinfo = { userid, userpw, username };
    signup();
  });
});
