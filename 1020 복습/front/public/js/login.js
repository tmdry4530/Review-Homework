document.addEventListener("DOMContentLoaded", () => {
  const frm = document.querySelector("form");
  frm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const {
      userid: { value: userid },
      userpw: { value: userpw },
    } = e.target;

    try {
      const { data } = await axios.post("http://localhost:4000/login", {
        userid,
        userpw,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  });
});
