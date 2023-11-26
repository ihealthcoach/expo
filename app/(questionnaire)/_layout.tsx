import { Slot, Stack } from "expo-router";
import loadFonts from "@/lib/loadFonts";

// Contexts
import { ProgressBarProvider } from "@/context/useProgressBar";
import ProgressBar from "@/components/ProgressBar";
import { ImageBackground, View } from "react-native";

export default function Layout() {
  const { fontsLoaded, fontError } = loadFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  // return (
  //   <ProgressBarProvider>
  //     <View className="px-16 pt-8">
  //       <ProgressBar />
  //     </View>
  //     <Slot />
  //   </ProgressBarProvider>
  // );

  return (
    <ImageBackground
      className="h-full w-full flex-1"
      // className="h-full w-full flex-1 bg-[#66eed2]"
      source={require("@/assets/images/imageBg.png")}
    >
      <ProgressBarProvider>
        <View className="px-16 pt-8">
          <ProgressBar />
        </View>
        <Stack>
          <Stack.Screen
            name="age"
            options={{ headerShown: false, animation: "fade" }}
          />
          <Stack.Screen
            name="bodytype"
            options={{ headerShown: false, animation: "fade" }}
          />
          <Stack.Screen
            name="fitness"
            options={{ headerShown: false, animation: "fade" }}
          />
          <Stack.Screen
            name="gender"
            options={{ headerShown: false, animation: "fade" }}
          />
          <Stack.Screen
            name="height"
            options={{ headerShown: false, animation: "fade" }}
          />
          <Stack.Screen
            name="weight"
            options={{ headerShown: false, animation: "fade" }}
          />
          <Stack.Screen
            name="mainGoal"
            options={{ headerShown: false, animation: "fade" }}
          />
          <Stack.Screen
            name="workout"
            options={{ headerShown: false, animation: "fade" }}
          />
        </Stack>
      </ProgressBarProvider>
    </ImageBackground>
  );
}
