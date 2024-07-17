import { View } from "react-native";
import React from "react";
import { ScrollView, Platform } from "react-native";

const BadgesWithHorizontalScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <View className="mb-2">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        // BUG: contentOffset and contentInset are not working on Android. Check if you can use 'Platform.OS' to set different values for different platforms.
        contentOffset={{ x: -16, y: 0 }}
        contentInset={{ top: 0, left: 16, bottom: 0, right: 16 }}
        // contentInset={{ top: 0, left: 16, bottom: 0, right: 16 }}
        contentContainerStyle={{ display: "flex", gap: 10, marginLeft: -16 }}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default BadgesWithHorizontalScroll;
