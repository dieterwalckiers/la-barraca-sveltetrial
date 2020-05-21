const AClient = require("apollo-client");
const ACacheInMem = require("apollo-cache-inmemory");
const ALinkHttp = require("apollo-link-http");
const ALinkContext = require("apollo-link-context");
const fetch = require("node-fetch");

const { InMemoryCache } = ACacheInMem;
const { setContext } = ALinkContext;
const { HttpLink } = ALinkHttp;

const uri = 'https://graphql.fauna.com/graphql'

exports.createApolloClient = function () {

  const cache = new InMemoryCache();
  const httpLink = new HttpLink({
    uri,
    fetch,
  });

  const authLink = setContext((_, { headers }) => {
    const b64encodedSecret = Buffer.from(
      "fnADsUC1yGACAMRG08nVKKK4_0oo4PzsyW-RIRKh" + ':' // weird but they // TODO: get from process.env.FAUNADB_SERVER_SECRET again (should already be set in the netlify ui)
    ).toString('base64')
    return {
      headers: {
        Authorization: `Basic ${b64encodedSecret}`,
      }
    }
  });

  return new AClient.ApolloClient({
    cache,
    link: authLink.concat(httpLink),
  });
}
