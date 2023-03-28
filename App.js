import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/compoment/screen/Home";
import Searh from "./src/compoment/screen/Searh";
import Real from "./src/compoment/screen/Real";
import Activity from "./src/compoment/screen/Activity";
import Profile from "./src/compoment/screen/Profile";
import React from "react";
import Status from "./src/compoment/screenCompoment/Status";

const App = () => {
    const Stack = createNativeStackNavigator();

    const Tab = createBottomTabNavigator();

    const Tabscreann = () => {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,

                    headerShown: false,
                    tabBarStyle: {
                        height: 60,
                    },

                    tabBarIcon: ({ focused, size, colour }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = focused ? "home-sharp" : "home-outline";
                            size = focused ? size + 8 : size + 3;
                        } else if (route.name === "Search") {
                            iconName = focused
                                ? "search"
                                : "ios-search-outline";
                        } else if (route.name === "Reels") {
                            iconName = focused
                                ? "caret-forward-circle"
                                : "caret-forward-circle-outline";
                        } else if (route.name === "Activity") {
                            iconName = focused
                                ? "ios-heart"
                                : "ios-heart-outline";
                        } else if (route.name === "Profile") {
                            iconName = focused
                                ? "ios-person-circle"
                                : "ios-person-outline";
                        }

                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={colour}
                            />
                        );
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search" component={Searh} />
                <Tab.Screen name="Reels" component={Real} />
                <Tab.Screen name="Activity" component={Activity} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Bottom" component={Tabscreann} />
                <Stack.Screen name="Status" component={Status} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
export default App;
