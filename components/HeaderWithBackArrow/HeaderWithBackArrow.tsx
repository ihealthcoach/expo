import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import ArrowLeftIcon from "@/assets/icons/arrow-left-solid";

const HeaderWithBackArrow = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <View className="mb-6 mt-4 flex-row items-center justify-between px-4">
      <Pressable onPress={() => router.back()}>
        <ArrowLeftIcon />
      </Pressable>
      {children}
    </View>
  );
};

export default HeaderWithBackArrow;
