import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import React from "react";

const AddCategory = () => {
  const {
    control,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      description: "",
      name: "",
    },
  });
  const onSubmit = (data) => {
    axios.post("https://northwind.vercel.app/api/categories", data);
    reset();
  };
  return (
    <View style={{ margin: 24 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
          fontWeight: "500",
          color: "#027cd3",
        }}
      >
        Create
      </Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              padding: 10,
              borderColor: "#444",
              borderWidth: 1,
              marginVertical: 10,
              borderRadius: 25,
            }}
            placeholder="description"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />
      {errors.description && (
        <Text style={{ color: "tomato" }}>This is required.</Text>
      )}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              padding: 10,
              borderColor: "#444",
              borderWidth: 1,
              marginBottom: 10,
              borderRadius: 25,
            }}
            placeholder="name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      <Pressable
        style={{
          padding: 10,
          width: 100,

          backgroundColor: "#027cd3",
          borderRadius: 25,
        }}
        onPress={handleSubmit(onSubmit)}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
            fontWeight: "500",
          }}
        >
          Submit
        </Text>
      </Pressable>
    </View>
  );
};

export default AddCategory;

const styles = StyleSheet.create({});
