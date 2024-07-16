import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

type RocketFilterProps = {
  rockets: string[];
  selectedRocket: string | null;
  selectRocket: (rocket: string) => void;
};

export const RocketFilter: React.FC<RocketFilterProps> = ({
  rockets,
  selectedRocket,
  selectRocket,
}) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterTitle}>Filter by rocket name</Text>
      {rockets.map((rocket) => {
        return (
          <View key={rocket} style={styles.filterItem}>
            <Pressable
              style={styles.pressable}
              onPress={() => selectRocket(rocket)}
            >
              <Text style={styles.pressableText}>
                {selectedRocket === rocket ? "X" : ""}
              </Text>
            </Pressable>
            <Text>{rocket}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  filterContainer: {
    justifyContent: "space-between",
    padding: 10,
  },
  filterTitle: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  filterItem: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  pressable: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pressableText: {
    fontSize: 10,
  },
});
