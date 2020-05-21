// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// const { createApolloClient } = apollo;

exports.handler = async function (event, context) {
  /** required for Fauna GraphQL auth */
  if (!process.env.FAUNADB_SERVER_SECRET) {
    const msg = `
    FAUNADB_SERVER_SECRET missing. 
    Did you forget to install the fauna addon or forgot to run inside Netlify Dev?
    `
    console.error(msg)
    return {
      statusCode: 500,
      body: JSON.stringify({ msg })
    }
  } else {
    console.log("using", process.env.FAUNADB_SERVER_SECRET);
  }
  const client = require("./apollo").createApolloClient();

  switch (event.httpMethod) {

    case "GET":

      const query = require("graphql-tag")`
        query {
          allPerformances {
            data {
              _id
              productionID
              timeID
            }
          }
        }
      `;

      const { data: { allPerformances: { data: performancesArrayDAO } } } = await client.query({ query });
      const performancesArray = performancesArrayDAO.map(p => ({
        id: p._id,
        productionID: p.productionID,
        timeID: p.timeID,
      }));

      return {
        statusCode: 200,
        body: JSON.stringify(performancesArray)
      }
    default:
      // callback(null, { statusCode: 500, body: "Only GET is implemented" });
      return {
        statusCode: 500,
        body:
          'WIP'
      }
  }

}
