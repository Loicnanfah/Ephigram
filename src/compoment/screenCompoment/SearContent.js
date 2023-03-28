/** @format */

import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const SearContent = (props) => {
  const searchData = [
    {
      id: 0,
      image: [
        require("../../storage/image/post1.jpg"),
        require("../../storage/image/post2.jpg"),
        require("../../storage/image/post3.jpg"),
        require("../../storage/image/post4.jpg"),
        require("../../storage/image/post5.jpg"),
        require("../../storage/image/post6.jpg"),
      ],
    },
    {
      id: 1,
      image: [
        require("../../storage/image/post7.jpg"),
        require("../../storage/image/post8.jpg"),
        require("../../storage/image/post9.jpg"),
        require("../../storage/image/post10.jpg"),
        require("../../storage/image/post11.jpg"),
        require("../../storage/image/post12.jpg"),
      ],
    },
    {
      id: 2,
      image: [
        require("../../storage/image/post13.jpg"),
        require("../../storage/image/post14.jpg"),
        require("../../storage/image/post15.jpg"),
      ],
    },
  ];

  return (
    <View style={{ marginTop: 40 }}>
      {searchData.map((data, index) => {
        return (
          <>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                {data.image.map((imagedata, imageindex) => {
                  return (
                    <TouchableOpacity
                      key={imageindex}
                      onPressIn={() => props.data(imagedata)}
                      onPressOut={() => props.data(null)}
                      style={{ paddingBottom: 2, width: "33%" }}
                    >
                      <Image
                        source={imagedata}
                        style={{ width: "100%", height: 150 }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: 261,
                    justifyContent: "space-between",
                  }}
                >
                  {data.image.slice(0, 4).map((imagedata, imageindex) => {
                    return (
                      <TouchableOpacity>
                        <Image
                          source={imagedata}
                          style={{ width: 129, height: 150 }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPressIn={() => props.data(data.image[5])}
                  onPressOut={() => props.data(null)}
                  style={{ marginLeft: 2, width: "52%" }}
                >
                  <Image
                    source={data.image[5]}
                    style={{ width: "100%", height: 300 }}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPressIn={() => props.data(data.image[2])}
                  onPressOut={() => props.data(null)}
                  style={{ paddingRight: 2, width: "66.5%" }}
                >
                  <Image
                    source={data.image[2]}
                    style={{ width: "100%", height: 300 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "33%",
                    justifyContent: "space-between",
                  }}
                >
                  {data.image.slice(0, 2).map((imagedata, imageindex) => {
                    return (
                      <TouchableOpacity
                        key={imageindex}
                        onPressIn={() => props.data(imagedata)}
                        onPressOut={() => props.data(null)}
                        style={{ paddingBottom: 2, width: "100%" }}
                      >
                        <Image
                          source={imagedata}
                          style={{ width: "100%", height: 150 }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </>
        );
      })}
    </View>
  );
};

export default SearContent;
