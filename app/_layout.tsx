import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import loadFonts from "@/lib/loadFonts";
// import { useFonts } from "expo-font";

export default function Layout() {
  const { fontsLoaded, fontError } = loadFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-[#66eed1]">
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="(getStarted)/mealsAndDiet"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(getStarted)/progress"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(getStarted)/goals"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(questionnaire)/gender"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(questionnaire)/mainGoal"
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="(questionnaire)/workout"
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="(questionnaire)/fitness"
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="(questionnaire)/weight"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(questionnaire)/height"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(questionnaire)/age"
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="(questionnaire)/bodytype"
          options={{ headerShown: false }}
        />
      </Stack>
    </SafeAreaView>
  );
}

// return (
//   <SafeAreaView className="flex-1 bg-[#66eed1]">
//     <Stack>
//       <Stack.Screen name="index" options={{ headerShown: false }} />
//       <Stack.Screen
//         name="/getStarted/mealsAndDiet"
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="/getStarted/progress"
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="/getStarted/goals"
//         options={{ headerShown: false }}
//       />
//     </Stack>
//   </SafeAreaView>
// );
// }
