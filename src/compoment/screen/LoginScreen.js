import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
            <Button title="send" />
        </View>
    );
};

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
