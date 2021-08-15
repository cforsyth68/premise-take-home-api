import searchOptions from "./characters.opts";

const charactersRoutes = (server, options, done) => {
  // Get a message
  server.get("/api/v1/character/:name", searchOptions);

  done();
};

export default charactersRoutes;
