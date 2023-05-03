import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
const CategoryList = ({ navigation }: any) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/categories").then((res) => {
      console.log(res.data);

      setCategory(res.data);
    });
  }, []);
  const goToDetail = (id: any) => {
    navigation.navigate("categoryDetail", { id: id });
  };
  const renderItem = ({ item }: any) => {
    return (
      <>
        <Pressable onPress={() => goToDetail(item.id)}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              borderBottomWidth: 1,
              borderBottomColor: "gray",
            }}
          >
            {item.id}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>{item.name}</Text>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            {item.description}
          </Text>
        </Pressable>
      </>
    );
  };
  return (
    <View>
      <FlatList data={category} renderItem={renderItem} />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
