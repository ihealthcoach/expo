import { Dimensions, ImageBackground, View } from "react-native";
import { Slot, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import loadFonts from "@/lib/loadFonts";
// import { useFonts } from "expo-font";

export default function Layout() {
  const { fontsLoaded, fontError } = loadFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View className="h-full w-full flex-1 bg-[#66eed2]">
      <ImageBackground
        className="h-full w-full flex-1"
        source={require("@/assets/images/imageBg.png")}
      >
        <SafeAreaView className="flex-1">
          <Slot />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
