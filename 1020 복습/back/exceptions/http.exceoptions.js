class HttpExceoption extends Error {
  constructor(message, error, statuisCode, timeStamp) {
    super(message);
    this.error = error;
    this.statuisCode = statuisCode;
    this.timeStamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Seoul",
      hour12: false,
    });
  }
}

module.exports = HttpExceoption;
