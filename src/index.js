import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import config from '../src/config/config';

const networkInterface = createNetworkInterface({
    uri: config.NETWORK_INTERFACE_URI
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
