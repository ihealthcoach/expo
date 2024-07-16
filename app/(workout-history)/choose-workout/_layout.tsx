import { Slot } from "expo-router";
import loadFonts from "@/lib/loadFonts";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/header/Header";

export default function Layout() {
  const { fontsLoaded, fontError } = loadFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={["top"]}>
      <View className="flex-1 px-4">
        <Header />
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          <View className="mb-6">
            <Text className="font-interBold text-4xl leading-[54px] text-gray-900">
              Workout
            </Text>
            <Text className="font-interRegular text-sm text-gray-400">
              Choose from the selection below
            </Text>
          </View>
          <Slot />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
