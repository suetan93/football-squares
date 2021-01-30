import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
 uri: "https://graphql.fauna.com/graphql",
 headers: {
   authorization: `Bearer ${process.env.FAUNA_KEY}`,
 },
 cache: new InMemoryCache(),
});