import { Slot, Stack } from "expo-router";
import loadFonts from "@/lib/loadFonts";
import { ImageBackground, View, Text } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useMemo } from "react";



export default function Layout() {
  const { fontsLoaded, fontError } = loadFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const snapPoints = useMemo(() => ["60%"], []);

  return (
    <View className="h-full w-full flex-1">
      <ImageBackground
        className="h-full w-full flex-1"
        source={require("@/assets/images/dashboard-landingpage/dashboardLandingpage.png")}
      >
       <View className="mx-4 flex-1">
        <Text className="text-2xl font-interBold text-white mt-8">Welcome back, John</Text>

        </View>

      </ImageBackground>
    </View>
  );
}
