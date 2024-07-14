import React, { useState } from "react";
import Badge from "../badge/Badge";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const Badges = () => {
  const [activeBadge, setActiveBadge] = useState<string | null>("Account");
  const router = useRouter();

  const handleBadgePress = (badge: string, path: string) => {
    setActiveBadge(badge);
    router.push(path);
  };

  return (
    <View className="mb-6 flex-1">
      <View className="flex w-full flex-row justify-between">
        <TouchableOpacity
          onPress={() =>
            handleBadgePress("Account", "/(profile)/(settings)/account")
          }
        >
          <Badge text="Account" isActive={activeBadge === "Account"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            handleBadgePress("Workout", "/(profile)/(settings)/workout")
          }
          // app/(profile)/(workout)/workout
        >
          <Badge text="Workout" isActive={activeBadge === "Workout"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleBadgePress("More", "/(profile)/(settings)/more")}
        >
          <Badge text="More" isActive={activeBadge === "More"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Badges;
