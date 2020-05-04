import initialCountries from "../utils/initialCountries";

export const resolvers = {
  Query: {
    allCountries: async (_, args) => {
      return await initialCountries;
    },
  },
};
