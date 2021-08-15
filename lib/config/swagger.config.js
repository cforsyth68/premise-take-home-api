const swaggerConfig = {
  exposeRoute: true,
  routePrefix: "/api/v1",
  swagger: {
    info: {
      title: "Premise Take-home API",
      description:
        "This API was built for the take-home challenge requested by Premise",
      version: "v1",
    },
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
      { name: "user", description: "User related end-points" },
      { name: "code", description: "Code related end-points" },
    ],
  },
};

export default swaggerConfig;
