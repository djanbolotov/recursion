import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App";
import "./index.css";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://countries.trevorblades.com/",
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);