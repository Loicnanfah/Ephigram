import React from "react";
import { View, Text, StatusBar, StyleSheet, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Stories from "../screenCompoment/Stories";
import Post from "../screenCompoment/Post";

const Home = () => {

    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <StatusBar
                backgroundColor="white"
                barStyle="dark-content"
                animated={true}
            />
            <View
                style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    paddingHorizontal: 15,
                    alignItems: "center",
                    marginTop: 40,
                }}
            >
                <FontAwesome name="plus-square-o" style={{ fontSize: 25 }} />
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: "500",
                    }}
                >
                    Ephigram
                </Text>
                <Feather name="navigation" style={{ fontSize: 25 }} />
            </View>
            <ScrollView>
                <Stories />
                <Post />
            </ScrollView>
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
