import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  // should be this uri in .env.local
  uri: "https://api-eu-central-1.hygraph.com/v2/cl6js8w1u5f2s01undyf2h5oz/master",
  cache: new InMemoryCache(),
});
