import build from "../lib/app";

describe("GIVEN app is running", () => {
  describe("request the '/api/v1/heartbeat' route", () => {
    it("should return status code 200", async () => {
      // arrange
      const app = build({});
      const expectedStatusCode = 200;
      const testOptions = {
        method: "GET",
        url: "/api/v1/heartbeat",
      };

      // act
      const response = await app.inject(testOptions);

      // assert
      expect(response.statusCode).toBe(expectedStatusCode);

      app.close();
    });

    it("should return heartbeat", async () => {
      // arrange
      const app = build({});
      const expecteResponse = "<3";
      const testOptions = {
        method: "GET",
        url: "/api/v1/heartbeat",
      };

      // act
      const response = await app.inject(testOptions);

      // assert
      expect(response.body).toBe(expecteResponse);

      app.close();
    });
  });
});
