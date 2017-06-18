import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const networkInterface = createNetworkInterface({
    uri: 'http://localhost:4000/graphql'
});

const Client = new ApolloClient({
    networkInterface,
    dataIdFromObject: obj => obj.id
});

const Root = () => {
    return (
        <ApolloProvider client={Client}>
            <App/>
        </ApolloProvider>
    )
};
ReactDOM.render(
    <Root />, document.getElementById('root')
);
registerServiceWorker();
