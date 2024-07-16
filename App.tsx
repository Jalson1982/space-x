import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/apollo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Router } from "./src/navigation/router";

export default function App() {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </SafeAreaProvider>
  );
}
