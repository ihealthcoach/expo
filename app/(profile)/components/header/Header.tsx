import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import React, { useState } from "react";
import ChatBubbleOvalLeftEllipsisOutlineIcon from "@/assets/icons/chat-bubble-oval-left-ellipsis-outline";
import BellOutlineIcon from "@/assets/icons/bell-outline";

import imageUrl from "@/assets/images/dashboard-landingpage/avatar.png";
import ArrowLeftIcon from "@/assets/icons/arrow-left-solid";
import Badge from "../badge/Badge";

const Header = () => {
  const [activeBadge, setActiveBadge] = useState<string | null>("Account");
  const router = useRouter();

  const handleBadgePress = (badge: string, path: string) => {
    setActiveBadge(badge);
    router.push(path);
  };
  return (
    <View className="mb-6 mt-2 flex items-start justify-start">
      <View className="w-full">
        <View className="w-full flex-row justify-between">
          <View className="py-2">
            <Pressable onPress={() => router.back()}>
              <ArrowLeftIcon />
            </Pressable>
          </View>
          <View className="flex flex-row items-center gap-4">
            <BellOutlineIcon />
            <ChatBubbleOvalLeftEllipsisOutlineIcon />
            <Image source={imageUrl} className="h-12 w-12 rounded-full" />
          </View>
        </View>
      </View>
      {/* <View className="flex w-full flex-row justify-between">
        <TouchableOpacity
          onPress={() => handleBadgePress("Account", "/(profile)/account")}
        >
          <Badge text="Account" isActive={activeBadge === "Account"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleBadgePress("Workout", "/(profile)/workout")}
          // app/(profile)/(workout)/workout
        >
          <Badge text="Workout" isActive={activeBadge === "Workout"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleBadgePress("More", "/(profile)/settings")}
        >
          <Badge text="More" isActive={activeBadge === "More"} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Header;
