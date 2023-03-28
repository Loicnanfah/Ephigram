import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Stories = () => {
    const navigation = useNavigation();
    const stories = [
        {
            id: 1,
            name: "you stories name",
            image: require("../../storage/image/userProfile.png"),
        },
        {
            id: 2,
            name: "emanuelle",
            image: require("../../storage/image/profile1.jpg"),
        },
        {
            id: 3,
            name: "Jordan",
            image: require("../../storage/image/profile8.jpg"),
        },
        {
            id: 4,
            name: "Dominique",
            image: require("../../storage/image/profile3.jpg"),
        },
        {
            id: 5,
            name: "Pharaon",
            image: require("../../storage/image/profile7.jpg"),
        },
        {
            id: 6,
            name: "Claudia",
            image: require("../../storage/image/profile5.jpg"),
        },
        {
            id: 7,
            name: "Sonia",
            image: require("../../storage/image/profile4.jpg"),
        },
    ];

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 20 }}
        >
            {stories.map((data, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() =>
                            navigation.push("Status", {
                                name: data.name,
                                image: data.image,
                            })
                        }
                    >
                        <View
                            style={{
                                flexDirection: "column",
                                paddingHorizontal: 8,
                                position: "relative",
                            }}
                        >
                            {data.id == 1 ? (
                                <View
                                    style={{
                                        position: "absolute",
                                        bottom: 18,
                                        right: 10,
                                        zIndex: 1,
                                    }}
                                >
                                    <Entypo
                                        name="circle-with-plus"
                                        style={{
                                            borderRadius: 100,
                                            fontSize: 20,
                                            marginBottom: 15,
                                            color: "#405de6",
                                            backgroundColor: "white",
                                        }}
                                    />
                                </View>
                            ) : null}
                            <View
                                style={{
                                    width: 68,
                                    height: 68,
                                    backgroundColor: "white",
                                    borderWidth: 1.8,
                                    borderRadius: 100,
                                    borderColor: "#c13584",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Image
                                    source={data.image}
                                    style={{
                                        resizeMode: "cover",
                                        width: "92%",
                                        height: "92%",
                                        borderRadius: 100,
                                        backgroundColor: "orange",
                                    }}
                                />
                            </View>
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontSize: 10,
                                    opacity: data.id == 0 ? 1 : 0.5,
                                }}
                            >
                                {" "}
                                {data.name}{" "}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};

export default Stories;
