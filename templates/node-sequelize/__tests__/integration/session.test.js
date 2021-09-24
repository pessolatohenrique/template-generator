const request = require("supertest");
const app = require("../../src");

describe("Authentication", () => {
  it("should authenticate with valid credentials", async () => {
    const response = await request(app).post("/login").send({
      username: "pessolatohenrique",
      password: "admin@123",
    });

    expect(response.status).toBe(200);
  });

  it("should not authenticate with invalid credentials", async () => {
    const response = await request(app).post("/login").send({
      username: "pessolatohenrique",
      password: "admin",
    });

    expect(response.status).toBe(401);
  });
});
