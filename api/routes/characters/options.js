import getByNameHandler from "../../controllers/characters";

const searchOptions = {
  schema: {
    description: "Wrapper for Breaking Bad API",
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            char_id: { type: "integer" },
            name: { type: "string" },
            birthday: { type: "string" },
            occupation: {
              type: "array",
              items: {
                type: "string",
              },
            },
            img: { type: "string" },
            status: { type: "string" },
            nickname: { type: "string" },
            appearance: {
              type: "array",
              items: {
                type: "integer",
              },
            },
            portrayed: { type: "string" },
            category: { type: "string" },
            better_call_saul_appearance: {
              type: "array",
              items: {
                type: "integer",
              },
            },
          },
        },
      },
    },
    params: {
      name: { type: "string" },
    },
  },
  handler: getByNameHandler,
};

export default searchOptions;
