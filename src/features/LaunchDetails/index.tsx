import React from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView } from "react-native";
import { useLaunchDetails } from "./useLaunchDetails";
import { ErrorScreen, Loader } from "../../components";
import { VideoPlayer } from "./components/VideoPlayer";

const TextDetail = ({
  label,
  children,
}: {
  label: string;
  children?: string;
}) => (
  <Text style={styles.detailText}>
    <Text style={styles.detailLabel}>{label}: </Text>
    {children}
  </Text>
);

export const LaunchDetails = () => {
  const { data, error, loading } = useLaunchDetails();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorScreen />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Launch Details</Text>
        <TextDetail label="Mission name">
          {data?.launch?.mission_name}
        </TextDetail>
        <TextDetail label="Rocket name">
          {data?.launch?.rocket?.rocket_name}
        </TextDetail>
        <TextDetail label="Launch date">
          {new Date(data?.launch?.launch_date_utc ?? "").toLocaleDateString()}
        </TextDetail>
        <TextDetail label="Details">{data?.launch.details ?? "-"}</TextDetail>
        {data?.launch?.links?.video_link && (
          <>
            <Text style={styles.sectionTitle}>Video</Text>
            <VideoPlayer url={data?.launch?.links?.video_link} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  detailText: {
    fontSize: 18,
    color: "#555",
    marginBottom: 8,
  },
  detailLabel: {
    fontWeight: "600",
    color: "#000",
  },
  sectionTitle: {
    fontSize: 20,
    color: "#444",
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
