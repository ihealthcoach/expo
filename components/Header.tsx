import { View, Text } from "react-native";
import React from "react";
import Bars3BottomLeftIcon from "@/assets/icons/bars-3-bottom-left";
import ChatBubbleOvalLeftEllipsisOutlineIcon from "@/assets/icons/chat-bubble-oval-left-ellipsis-outline";

const Header = () => {
  return (
    <View>
      <View className="py-2">
        <Bars3BottomLeftIcon />
      </View>
    </View>
  );
};

export default Header;
