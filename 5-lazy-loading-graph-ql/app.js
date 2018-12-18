const express = require('express')
const app = express()
const cors = require('cors')
var {buildSchema} = require('graphql')
const graphqlHTTP = require('express-graphql')
const fakeArray =require('./fakeArray')
var schema = buildSchema(`
  type User{
    id: Int,
    name: String,
    email:String,
    address:String,
    image:String,
  }
  type Query {
    users(lastId: Int!,numItems: Int!): [User]
  }
`);
app.use(cors())
var root = {
    users: (args) => {
        var start = args.lastId+1
        var endId = start+args.numItems
        return fakeArray.slice(start,endId);
    },
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(5005);