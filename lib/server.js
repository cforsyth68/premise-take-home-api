import build from "./app";

const server = build();

const start = async () => {
  try {
    await server.listen(8000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();

// eslint-disable-next-line no-console
console.log(
  "Server running. View Swagger docs at http://localhost:8000/api/v1"
);
