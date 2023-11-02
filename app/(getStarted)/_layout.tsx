import { Slot, Stack } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";
import loadFonts from "@/lib/loadFonts";
// import { useFonts } from "expo-font";

export default function Layout() {
  const { fontsLoaded, fontError } = loadFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="mealsAndDiet" options={{ headerShown: false }} />
      <Stack.Screen name="progress" options={{ headerShown: false }} />
      <Stack.Screen name="goals" options={{ headerShown: false }} />
    </Stack>
  );
}
