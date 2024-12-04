import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import { logout } from "@/lib/appwrite";

const Profile = () => {

  return (
    <SafeAreaView>
      <Text className="">Profile!</Text>
      <CustomButton title="Logout" containerStyles="" handlePress={logout} />
    </SafeAreaView>
  );
};

export default Profile;
