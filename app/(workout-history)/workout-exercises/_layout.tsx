import { Slot } from "expo-router";
import loadFonts from "@/lib/loadFonts";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import Badge from "@/components/Badge/Badge";
import PlusSmallIcon from "@/assets/icons/plus-small-outline";
import SortIcon from "@/assets/icons/vuesax-sort-linear";
import EllipsisHorizontalIcon from "@/assets/icons/ellipsis-horizontal-outline";

export default function Layout() {
  const { fontsLoaded, fontError } = loadFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleOpenPanel = () => {
    console.log("Open panel");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={["top"]}>
      <View className="relative flex-1 px-4">
        <HeaderWithBackArrow>
          <EllipsisHorizontalIcon />
        </HeaderWithBackArrow>
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          <View className="mb-6">
            <Text className="font-interBold text-4xl leading-[54px] text-gray-900">
              Workout
            </Text>
            <Text className="font-interRegular text-sm text-gray-400">
              {/* TODO: Refactor number of exercises to be dynamic */}6
              exercises added to your workout
            </Text>
          </View>
          <Slot />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
