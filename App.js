import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-web";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import CategoryList from "./screens/CategoryList";
import AddCategory from "./screens/AddCategory";
import Detail from "./screens/Detail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Category" component={CategoryList} />
        <Stack.Screen name="addCategory" component={AddCategory} />
        <Stack.Screen name="categoryDetail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
