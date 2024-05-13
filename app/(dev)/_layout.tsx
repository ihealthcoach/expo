import { Slot, Stack } from "expo-router";
import loadFonts from "@/lib/loadFonts";
import { ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { useFonts } from "expo-font";

export default function Layout() {
  const { fontsLoaded, fontError } = loadFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ImageBackground
      className="h-full w-full flex-1"
      source={require("@/assets/images/imageBg.png")}
    >
      <SafeAreaView className="flex-1" edges={["top"]}>
        <Slot />
      </SafeAreaView>
    </ImageBackground>
  );
}
