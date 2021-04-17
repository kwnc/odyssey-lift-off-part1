import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <GlobalStyles/>
        <Pages/>
    </ApolloProvider>,
    document.getElementById('root')
);
