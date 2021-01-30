const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3003

const public = path.join(__dirname, '../client/dist')

app.use(express.static(public))
app.use(express.json())

app.listen(3003, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('listening on port: ', PORT)
  }
})

// var express = require('express');
// var { graphqlHTTP } = require('express-graphql');
// var { buildSchema } = require('graphql');

// app.use(express.static(public))
// app.use(express.json())

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// // The root provides a resolver function for each API endpoint
// var root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };

// var app = express();

// app.use(express.static(public))
// app.use(express.json())
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
// app.listen(PORT);
// console.log('Running a GraphQL API server:', PORT);