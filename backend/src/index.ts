import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer, gql } from 'apollo-server-core';
import express from 'express';
import http from 'http';

import { Query, Mutation } from './resolver'

async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
		typeDefs,
		resolvers,
		csrfPrevention: true,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`cj debug: 🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

const typeDefs = gql`
	# Comments.
	type Book {
		title: String
		author: String
	}

	type Query {
		hello: String
		books: [Book]
	}

	type Mutation {
		addBook(title: String, author: String): Book
	}
`;

startApolloServer(typeDefs, { Query, Mutation })
