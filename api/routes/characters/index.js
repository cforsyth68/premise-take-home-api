import searchOptions from "./options";

const getByName = (server, options, next) => {
  // Get a message
  server.get("/api/v1/character/:name", searchOptions);

  next();
};

export default getByName;
