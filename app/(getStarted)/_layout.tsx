import { Slot, Stack } from "expo-router";
import loadFonts from "@/lib/loadFonts";
import { ImageBackground } from "react-native";
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
      <Slot />
    </ImageBackground>
  );
}
