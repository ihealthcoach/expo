import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <BottomSheetModalProvider>
      <SafeAreaView>
        <Slot />
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
}
