const searchCharacters = async (request) => {
  const { name } = request.params;
  // /api/characters?name=Walter
  return { name };
};

export default searchCharacters;
