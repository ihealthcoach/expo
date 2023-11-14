import { Slot, Stack } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";
import loadFonts from "@/lib/loadFonts";
import { SafeAreaView } from "react-native-safe-area-context";
// import { useFonts } from "expo-font";

export default function Layout() {
  const { fontsLoaded, fontError } = loadFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    // <SafeAreaView className="flex-1">
    <Slot />
    // <Stack>
    //   <Stack.Screen name="age" options={{ headerShown: false }} />
    //   <Stack.Screen name="bodytype" options={{ headerShown: false }} />
    //   <Stack.Screen name="fitness" options={{ headerShown: false }} />
    //   <Stack.Screen name="gender" options={{ headerShown: false }} />
    //   <Stack.Screen name="height" options={{ headerShown: false }} />
    //   <Stack.Screen name="weight" options={{ headerShown: false }} />
    //   <Stack.Screen name="mainGoal" options={{ headerShown: false }} />
    //   <Stack.Screen name="workout" options={{ headerShown: false }} />
    // </Stack>
    // </SafeAreaView>
  );
}
