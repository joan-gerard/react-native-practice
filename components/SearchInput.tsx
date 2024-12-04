import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
}: {
  title: string;
  value: string;
  handleChangeText: any;
  otherStyles: string;
  keyboardType?: string;
  placeholder?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="mt-2 border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl justify-between flex-row focus:border-secondary items-center space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
