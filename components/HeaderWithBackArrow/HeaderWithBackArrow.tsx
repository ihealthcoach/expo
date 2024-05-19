import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import ArrowLeftIcon from "@/assets/icons/arrow-left-solid";
import ChevronDownIcon from "@/assets/icons/chevron-down-mini";
import PlusCircleIcon from "@/assets/icons/plus-circle-outline";
import PlusIcon from "@/assets/icons/plus-mini-20";
import Badge from "@/components/Badge";
import CheckBadgeOutlineIcon from "@/assets/icons/check-badge-outline";
import CheckOutlineIcon from "@/assets/icons/check-outline";

const HeaderWithBackArrow = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <View className="mb-6 mt-4 flex-row items-center justify-between px-4">
      <Pressable onPress={() => router.back()} className="">
        <ArrowLeftIcon />
      </Pressable>
      {children}
    </View>
  );
};

export default HeaderWithBackArrow;
