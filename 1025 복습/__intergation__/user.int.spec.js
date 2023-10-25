const request = require("supertest");
const app = require("../app");

describe("통합테스트 userController", () => {
  it("POST /users", async () => {
    const body = { id: "chadmom44", pw: "1234", name: "tmdry" };
    const response = await request(app)
      .post("/users")
      .set("Content-type", "application/json")
      .send(body);
    expect(response.text).toBe("hello world!");
  });
});
