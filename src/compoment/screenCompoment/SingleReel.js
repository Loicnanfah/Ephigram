/** @format */

import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import Video from "react-native-video";

const SingleReel = ({ item, index, currentIndex }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const videoRef = useRef(null);

  const onBuffer = (buffer) => {
    console.log("buffring", buffer);
  };
  const onError = (error) => {
    console.log("error", error);
  };

  const [mute, setMute] = useState(false);

  const [like, setLike] = useState(item.isLike);

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
};

export default SingleReel;
