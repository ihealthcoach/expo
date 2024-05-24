import { Dimensions, ImageBackground, View } from "react-native";
import { Slot, Stack } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import loadFonts from "@/lib/loadFonts";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
// import { useFonts } from "expo-font";

export default function Layout() {
  const { fontsLoaded, fontError } = loadFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView className="flex-1">
      {/* BUG: BottomSheetModalProvider is not generating the proper backdrop */}
      {/* <BottomSheetModalProvider> */}
      {/* <View className="h-full w-full flex-1 bg-red-500"> */}
      {/* <View className="h-full w-full flex-1 bg-[#66eed2]"> */}
      {/* <ImageBackground
        className="h-full w-full flex-1"
        source={require("@/assets/images/imageBg.png")}
      > */}
      {/* <SafeAreaProvider> */}
      {/* <SafeAreaView className="flex-1"> */}
      <Slot />
      {/* </SafeAreaView> */}
      {/* </SafeAreaProvider> */}
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
      {/* </ImageBackground> */}
      {/* </View> */}
      {/* </BottomSheetModalProvider> */}
    </GestureHandlerRootView>
  );
}
