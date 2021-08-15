import fastify from "fastify";
import fastifySwagger from "fastify-swagger";
import swaggerConfig from "./config/swagger.config";
import charactersRoutes from "./routes/characters";

const server = fastify({
  logger: {
    level: "info",
    prettyPrint: true,
  },
});

server.register(fastifySwagger, swaggerConfig);

server.register(charactersRoutes);

server.get("/api/v1/heartbeat", (req, reply) => {
  reply.status(200).send("<3");
});

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
