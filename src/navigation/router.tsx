import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LaunchesList } from "../features/LaunchesList";
import { LaunchDetails } from "../features/LaunchDetails";
import { Routes } from "./routes";
import { commonSettings, modalSettings } from "./settings";

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={commonSettings}>
        <Stack.Screen name={Routes.LaunchesList} component={LaunchesList} />
        <Stack.Screen
          name={Routes.LaunchDetails}
          component={LaunchDetails}
          options={{
            ...modalSettings,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
