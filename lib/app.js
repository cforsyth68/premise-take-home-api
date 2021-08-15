import fastify from "fastify";
import fastifyCors from "fastify-cors";
import fastifySwagger from "fastify-swagger";
import swaggerConfig from "./config/swagger.config";
import getByName from "./routes/characters";

const defaultOptions = {
  logger: {
    level: "info",
    prettyPrint: true,
  },
};

const build = (options) => {
  const settings = { ...(options || defaultOptions) };

  const app = fastify(settings);

  app.register(fastifyCors, {
    origin: ["http://localhost", "http://127.0.0.1"],
    methods: ["GET"],
  });

  app.register(fastifySwagger, swaggerConfig);

  app.register(getByName);

  app.get("/api/v1/heartbeat", (req, reply) => {
    reply.status(200).send("<3");
  });

  return app;
};

export default build;
