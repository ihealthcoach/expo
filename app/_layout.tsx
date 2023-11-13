import { Dimensions, ImageBackground, View } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import loadFonts from "@/lib/loadFonts";
import ImageBgIH from "@/assets/images/svg/imageBackground";
// import { useFonts } from "expo-font";

export default function Layout() {
  const { fontsLoaded, fontError } = loadFonts();
  const { width, height } = Dimensions.get("window");

  // console.log("width", width);
  // console.log("height", height);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1">
      {/* <SafeAreaView className="flex-1 bg-[#66eed1]"> */}
      {/* <ImageBgIH width={width} height={height} /> */}
      {/* <ImageBackground
          className="h-full w-full flex-1"
          source={require("@/assets/images/android-q-beta-3-wallpaper-1.png")}
        > */}
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(getStarted)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="(questionnaire)" options={{ headerShown: false }} />
      </Stack>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
}
