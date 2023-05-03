import { View, Text, Button, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AboutScreen = ({ navigation }: any) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          backgroundColor: "#027CD3",
        }}
      >
        <View>
          <Pressable
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign
              style={{ fontSize: 18, color: "#fff", marginRight: 5 }}
              name="doubleleft"
            />
            <Text style={{ fontSize: 18, color: "#fff" }}>Home</Text>
          </Pressable>
        </View>
        <View>
          <Text
            style={{
              marginRight: 5,
              fontWeight: "600",
              fontSize: 25,
              color: "#fff",
              marginLeft: 5,
            }}
          >
            About
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AboutScreen;
