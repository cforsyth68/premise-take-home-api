import searchCharacters from "../controllers/characters";

const searchOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          name: { type: "string" },
          message: { type: "string" },
        },
      },
    },
    params: {
      name: { type: "string" },
    },
  },
  handler: searchCharacters,
};

export default searchOptions;
