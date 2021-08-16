import axios from "axios";

const getByNameHandler = async (request, reply) => {
  const { name } = request.params;

  // eslint-disable-next-line no-console
  console.log(`search name: ${name}`);

  const { data, status } = await axios.get(
    `https://www.breakingbadapi.com/api/characters?name=${name}`
  );

  // eslint-disable-next-line no-console
  console.log(`response data`, data);

  reply.status(status).send(data);
};

export default getByNameHandler;
