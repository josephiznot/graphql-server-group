import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import QueryData from "./components/queries/QueryData";

const client = new ApolloClient({ uri: "http://localhost:2987/graphql" });

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <QueryData render={data => <h1>Hello {data.getUser.user_name}</h1>} />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
