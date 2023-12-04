import { Slot, Stack } from "expo-router";
import loadFonts from "@/lib/loadFonts";

// Contexts
import { ProgressBarProvider } from "@/context/useProgressBar";
import ProgressBar from "@/components/ProgressBar";
import { ImageBackground, SafeAreaView, View } from "react-native";
import { QuestionnaireProvider } from "@/context/useQuestionnaire";

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
      <ProgressBarProvider>
        <View className="px-16 pt-5">
          <ProgressBar />
        </View>
        <QuestionnaireProvider>
          <Stack>
            <Stack.Screen
              name="age"
              options={{
                headerShown: false,
                animation: "none",
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="bodytype"
              options={{
                headerShown: false,
                animation: "none",
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="fitness"
              options={{
                headerShown: false,
                animation: "none",
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="gender"
              options={{
                headerShown: false,
                animation: "none",
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="height"
              options={{
                headerShown: false,
                animation: "none",
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="weight"
              options={{
                headerShown: false,
                animation: "none",
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="mainGoal"
              options={{
                headerShown: false,
                animation: "none",
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="workout"
              options={{
                headerShown: false,
                animation: "none",
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="continueWithEmail"
              options={{
                headerShown: false,
                animation: "none",
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="createAccount"
              options={{
                headerShown: false,
                animation: "none",
              }}
            />
          </Stack>
        </QuestionnaireProvider>
      </ProgressBarProvider>
    </ImageBackground>
  );
}
