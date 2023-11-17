import { Slot, Stack } from "expo-router";
import loadFonts from "@/lib/loadFonts";

// Contexts
import { ProgressBarProvider } from "@/context/useProgressBar";
import ProgressBar from "@/components/ProgressBar";
import { View } from "react-native";

export default function Layout() {
  const { fontsLoaded, fontError } = loadFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    // <SafeAreaView className="flex-1">
    <ProgressBarProvider>
      <View className="px-16 pt-8">
        <ProgressBar />
      </View>
      <Slot />
    </ProgressBarProvider>
    // <Stack>
    //   <Stack.Screen
    //     name="age"
    //     options={{ headerShown: false, animation: "none" }}
    //   />
    //   <Stack.Screen
    //     name="bodytype"
    //     options={{ headerShown: false, animation: "none" }}
    //   />
    //   <Stack.Screen
    //     name="fitness"
    //     options={{ headerShown: false, animation: "none" }}
    //   />
    //   <Stack.Screen
    //     name="gender"
    //     options={{ headerShown: false, animation: "none" }}
    //   />
    //   <Stack.Screen
    //     name="height"
    //     options={{ headerShown: false, animation: "none" }}
    //   />
    //   <Stack.Screen
    //     name="weight"
    //     options={{ headerShown: false, animation: "none" }}
    //   />
    //   <Stack.Screen
    //     name="mainGoal"
    //     options={{ headerShown: false, animation: "none" }}
    //   />
    //   <Stack.Screen
    //     name="workout"
    //     options={{ headerShown: false, animation: "none" }}
    //   />
    // </Stack>
    // </SafeAreaView>
  );
}
