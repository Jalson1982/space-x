import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

interface VideoPlayerProps {
  url: string;
}
export const VideoPlayer = ({ url }: VideoPlayerProps) => {
  const videoId = url.split("v=")[1];

  return (
    <View>
      <YoutubePlayer height={300} play={true} videoId={videoId} />
    </View>
  );
};
