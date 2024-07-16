import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { Launch } from "../../../types/launches";

interface LaunchItemProps {
  launch: Launch;
  navigateToLaunchDetails: (id: string) => void;
}
export const LaunchItem = ({
  launch,
  navigateToLaunchDetails,
}: LaunchItemProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigateToLaunchDetails(launch.id);
      }}
    >
      <Text style={styles.missionName}>
        Mission name: {launch.mission_name}
      </Text>
      <Text style={styles.rocketName}>
        Rocket name: {launch.rocket.rocket_name}
      </Text>
      <Text style={styles.rocketType}>Type: {launch.rocket.rocket_type}</Text>
      <Text style={styles.description}>Description: {launch.details}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  missionName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  rocketName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
  },
  rocketType: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#666",
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: "#777",
    lineHeight: 18,
  },
});
