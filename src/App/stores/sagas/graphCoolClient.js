// @flow

import { ApolloClient, createNetworkInterface } from "react-apollo";
import {
  SubscriptionClient,
  addGraphQLSubscriptions
} from "subscriptions-transport-ws";
import {
  GRAPHQL_AUTH_API,
  GRAPHCOOL_SUBSCRIBTION_API
} from "../../appConstants/index";

const networkInterface = createNetworkInterface({
  uri: GRAPHQL_AUTH_API
});
const wsClient = new SubscriptionClient(GRAPHCOOL_SUBSCRIBTION_API, {
  reconnect: true
});

const networkInterfaceWithSubscription = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

const graphCoolClient = new ApolloClient({
  networkInterface: networkInterfaceWithSubscription
});

export default graphCoolClient;
