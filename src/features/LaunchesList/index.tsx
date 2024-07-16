import React, { useCallback } from "react";
import { useLaunchList } from "./useLaunchList";
import { FlashList } from "@shopify/flash-list";
import { ErrorScreen, Loader } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { LaunchItem } from "./components/LaunchItem";
import { Launch } from "../../types/launches";
import { StyleSheet } from "react-native";
import { RocketFilter } from "../LaunchDetails/components/Filters";

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
    <SafeAreaView style={styles.safeAreaView}>
      <RocketFilter
        rockets={rockets}
        selectedRocket={selectedRocket}
        selectRocket={selectRocket}
      />
      <FlashList data={data} estimatedItemSize={100} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
