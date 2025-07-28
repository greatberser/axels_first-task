import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Expense {
    id: ID!
    category: String!
    amount: Float!
    date: String!
  }
  type Query {
    expenses: [Expense!]!
  }
`;

const expenses = [
  { id: 1, category: 'Food', amount: 15, date: '2024-04-01' },
  { id: 2, category: 'Food', amount: 50, date: '2025-01-01' },
  { id: 3, category: 'Transport', amount: 20, date: '2025-01-02' },
];

const resolvers = {
  Query: {
    expenses: () => expenses,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
