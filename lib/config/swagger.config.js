const swaggerConfig = {
  exposeRoute: true,
  routePrefix: "/api/v1",
  swagger: {
    info: { title: "premise-take-home-api documentation" },
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};

export default swaggerConfig;
