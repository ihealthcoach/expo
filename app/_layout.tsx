import { Dimensions, ImageBackground, View } from "react-native";
import { Slot, Stack } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import loadFonts from "@/lib/loadFonts";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
// import { useFonts } from "expo-font";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QuestionnaireProvider } from "@/context/useQuestionnaire";
import { onlineManager } from "@tanstack/react-query";
import NetInfo from "@react-native-community/netinfo";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const queryClient = new QueryClient();

const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
  throttleTime: 3000,
});

export default function Layout() {
  const { fontsLoaded, fontError } = loadFonts();

  useEffect(() => {
    return NetInfo.addEventListener((state) => {
      const status = !!state.isConnected;
      onlineManager.setOnline(status);
    });
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <PersistQueryClientProvider
      onSuccess={() =>
        queryClient
          .resumePausedMutations()
          .then(() => queryClient.invalidateQueries())
      }
      persistOptions={{ persister }}
      client={queryClient}
    >
      <GestureHandlerRootView className="flex-1">
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
    </PersistQueryClientProvider>
  );
}
