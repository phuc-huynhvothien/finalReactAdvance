import { withApollo } from 'next-apollo'
// import ApolloClient, { InMemoryCache } from 'apollo-boost'

// const apolloClient = new ApolloClient({
//   uri: 'https://min-shop.herokuapp.com/graphql',
//   cache: new InMemoryCache(),
// })

import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

// const errorLink = onError(({ networkError, graphQLErrors }) => {
//   if (graphQLErrors) {
//     graphQLErrors.map(({ message, locations, path }) =>
//       console.log(
//         `[ThienPhuc final React Advantace error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//       ),
//     );
//   }
//   if (networkError) console.log(`[Network error]: ${networkError}`);
// });

const httpLink = createHttpLink({
  uri: 'https://min-shop.herokuapp.com/graphql',
});

const link = ApolloLink.from([
  httpLink,
  
]);

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  queryDeduplication: true,
});

export default withApollo(apolloClient)
