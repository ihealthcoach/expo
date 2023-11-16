import { Dimensions, ImageBackground, View } from "react-native";
import { Slot, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import loadFonts from "@/lib/loadFonts";
// import { useFonts } from "expo-font";

export default function Layout() {
  const { fontsLoaded, fontError } = loadFonts();
  const { width, height } = Dimensions.get("window");

  // console.log("width", width);
  // console.log("height", height);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ImageBackground
      className="h-full w-full flex-1"
      source={require("@/assets/images/imageBg.png")}
    >
      <SafeAreaView className="flex-1">
        <Slot />
      </SafeAreaView>
    </ImageBackground>
  );
}
