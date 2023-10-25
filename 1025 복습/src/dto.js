class BaseDTO {
  validate(props) {
    if (!props) throw new Error("body empty");
    if (typeof props !== "object") throw new Error("body X");

    for (const key in props) {
      if (!props[key]) {
        throw new Error(`${key}속성 x`);
      }
    }
  }
  toDate(d) {
    const date = new Date(d);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  }
}

module.exports = BaseDTO;
