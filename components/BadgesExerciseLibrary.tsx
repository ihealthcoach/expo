import { View, Text } from "react-native";
import React from "react";
import Badge from "./Badge/Badge";
import BarsArrowDownIcon from "@/assets/icons/bars-arrow-down-outline";
import ClockOutline24Icon from "@/assets/icons/clock-outline-24";
import HeartIcon from "@/assets/icons/heart-outline";
import ClipboardIcon from "@/assets/icons/clipboard-outline";
// import { ScrollView } from "react-native-gesture-handler";
import { ScrollView } from "react-native";

const BadgesExerciseLibrary = () => {
  return (
    <View className="mb-2">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        // BUG: contentOffset and contentInset are not working on Android
        contentOffset={{ x: -16, y: 0 }}
        contentInset={{ top: 0, left: 16, bottom: 0, right: 16 }}
        contentContainerStyle={{ display: "flex", gap: 10 }}
      >
        <Badge isDark iconBefore={<BarsArrowDownIcon />} text="A-Z" />
        <Badge
          isWhite
          iconBefore={<ClockOutline24Icon stroke="#4B5563" />}
          text="Recent"
        />
        <Badge
          isWhite
          iconBefore={<HeartIcon stroke={"#4B5563"} />}
          text="Favorites"
        />
        <Badge
          isWhite
          iconBefore={<ClipboardIcon stroke={"#4B5563"} />}
          text="My workouts"
        />
      </ScrollView>
    </View>
  );
};

export default BadgesExerciseLibrary;
