import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
    return (
        <View style={styles.container}>
            <Text>Onboarding</Text>
            <Ionicons name="plays" style={{ fontSize: "25" }} />
        </View>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
