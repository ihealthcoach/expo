import { Slot } from "expo-router";
import loadFonts from "@/lib/loadFonts";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import Badge from "@/components/Badge/Badge";
import PlusSmallIcon from "@/assets/icons/plus-small-outline";
import SortIcon from "@/assets/icons/vuesax-sort-linear";

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
          <View className="flex-row items-center">
            <View className="mr-3">
              <Badge
                text="New workout"
                iconAfter={<PlusSmallIcon stroke="none" fill="#FCFEFE" />}
                isDark
              />
            </View>
          </View>
        </HeaderWithBackArrow>
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          <View className="mb-6">
            <Text className="font-interBold text-4xl leading-[54px] text-gray-900">
              Workout history
            </Text>
            <Text className="font-interRegular text-sm text-gray-400">
              {/* TODO: Refactor number of workouts to be dynamic */}
              Choose from 157 previous completed workouts
            </Text>
          </View>
          <Slot />
        </ScrollView>
        <View className="absolute bottom-8 right-8">
          <Pressable onPress={handleOpenPanel}>
            <Badge className="w-full" isDark icon={<SortIcon />} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
