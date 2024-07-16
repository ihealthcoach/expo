import { View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

import ArrowLeftIcon from "@/assets/icons/arrow-left-solid";
// import Badge from "../badge/Badge";

const Header = () => {
  const router = useRouter();

  return (
    <View className="mb-6 mt-2 flex items-start justify-start">
      <View className="w-full">
        <View className="w-full flex-row justify-between">
          <View className="py-2">
            <Pressable onPress={() => router.back()}>
              <ArrowLeftIcon />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
