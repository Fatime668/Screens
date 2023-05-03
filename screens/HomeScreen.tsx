import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign, Ionicons } from "@expo/vector-icons";
const HomeScreen = ({ navigation }: any) => {
  const goTo = () => {
    navigation.navigate("About");
  };
  const goToList = () => {
    navigation.navigate("Category");
  };
  const goToAdd = () => {
    navigation.navigate("addCategory");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#ccc" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: "#027CD3",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign style={{ fontSize: 25, color: "white" }} name="home" />

          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25,
              color: "#fff",
              marginLeft: 5,
            }}
          >
            Home
          </Text>
        </View>
        <View>
          <Pressable
            onPress={goTo}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text
              style={{
                marginRight: 5,
                fontSize: 18,
                color: "#fff",
                marginLeft: 5,
              }}
            >
              About
            </Text>
            <AntDesign
              style={{ fontSize: 18, color: "#fff", marginLeft: 5 }}
              name="doubleright"
            />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 50,
        }}
      >
        <TouchableOpacity
          onPress={goToList}
          style={{
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#ddd",
            width: "100%",
            marginBottom: 10,
            borderWidth: 2,
            borderColor: "#027CD3",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500" }}>CategoryList</Text>
          <Ionicons style={{ fontSize: 25 }} name="ios-list-outline" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToAdd}
          style={{
            padding: 20,
            backgroundColor: "#ddd",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            borderWidth: 2,
            borderColor: "#027CD3",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500" }}>AddCategory</Text>
          <Ionicons style={{ fontSize: 25 }} name="ios-add-outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
