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
      source={require("@/assets/images/dashboard-landingpage/dashboardLandingpage.png")}
    >
      <SafeAreaView className="flex-1" edges={["top"]}>
        <Slot />
        {/* </SafeAreaView> */}
        {/* <Stack>
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
        </Stack> */}
      </SafeAreaView>
    </ImageBackground>
  );
}
