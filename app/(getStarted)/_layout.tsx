import { Slot, Stack } from "expo-router";
import loadFonts from "@/lib/loadFonts";
import { ImageBackground, View } from "react-native";
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
        {/* <Slot /> */}
        <Stack>
          <Stack.Screen
            name="goals"
            options={{ headerShown: false, animation: "fade" }}
          />
          <Stack.Screen
            name="mealsAndDiet"
            options={{ headerShown: false, animation: "fade" }}
          />
          <Stack.Screen
            name="progress"
            options={{ headerShown: false, animation: "fade" }}
          />
        </Stack>
      </ImageBackground>
    </View>
  );
}
