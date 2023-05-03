import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CategoryModel } from "./CategoryModel";

const Detail = ({ navigation, route }: any) => {
  const [detail, setDetail] = useState<CategoryModel>();
  const { id } = route.params;
  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/categories/" + id)
      .then((res) => {
        setDetail(res.data);
      });
  }, []);
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
        }}
      >
        id: {id}
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
        }}
      >
        Name: {detail?.name}
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
        }}
      >
        Description: {detail?.description}
      </Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
