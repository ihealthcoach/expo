import { View, Text } from "react-native";
import { Image } from "expo-image";
import React from "react";
import Bars3BottomLeftIcon from "@/assets/icons/bars-3-bottom-left";
import ChatBubbleOvalLeftEllipsisOutlineIcon from "@/assets/icons/chat-bubble-oval-left-ellipsis-outline";
import BellOutlineIcon from "@/assets/icons/bell-outline";

import imageUrl from "@/assets/images/dashboard-landingpage/avatar.png";

const Header = () => {
  return (
    <View className="mb-6 mt-2 flex-row items-start justify-start">
      <View className="flex-1 py-2">
        <Bars3BottomLeftIcon />
      </View>
      <View className="flex flex-row items-center gap-4">
        <BellOutlineIcon />
        <ChatBubbleOvalLeftEllipsisOutlineIcon />
        <Image source={imageUrl} className="h-12 w-12 rounded-full" />
      </View>
    </View>
  );
};

export default Header;
