import React, { useCallback } from "react";
import { useLaunchList } from "./useLaunchList";
import { FlashList } from "@shopify/flash-list";
import { ErrorScreen, Loader } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { LaunchItem } from "./components/LaunchItem";
import { Launch } from "../../types/launches";
import { View, Text, Pressable } from "react-native";

export const LaunchesList = () => {
  const {
    error,
    data,
    loading,
    navigateToLaunchDetails,
    rockets,
    selectRocket,
    selectedRocket,
  } = useLaunchList();

  const renderItem = useCallback(
    ({ item }: { item: Launch }) => (
      <LaunchItem
        launch={item}
        navigateToLaunchDetails={navigateToLaunchDetails}
      />
    ),
    [navigateToLaunchDetails]
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ marginTop: 20, paddingHorizontal: 20 }}>
        Filter by rocket name
      </Text>
      <View
        style={{
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        {rockets.map((rocket) => {
          return (
            <View
              key={rocket}
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Pressable
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 1,
                  borderRadius: 10,
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => selectRocket(rocket)}
              >
                <Text style={{ fontSize: 10 }}>
                  {selectedRocket === rocket ? "X" : ""}
                </Text>
              </Pressable>
              <Text>{rocket}</Text>
            </View>
          );
        })}
      </View>
      <FlashList
        data={data}
        estimatedItemSize={100}
        renderItem={renderItem}
      ></FlashList>
    </SafeAreaView>
  );
};
