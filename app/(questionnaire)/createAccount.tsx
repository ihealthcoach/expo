import { useEffect, useMemo } from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";

// Context
import { useProgressBarVisibility } from "@/context/useProgressBar";
import { G, Path, Svg } from "react-native-svg";
import BottomSheet from "@gorhom/bottom-sheet";
import { Link } from "expo-router";

const QCreateAccount = () => {
  const { showProgressBar, hideProgressBar } = useProgressBarVisibility();

  const snapPoints = useMemo(() => ["60%"], []);

  useEffect(() => {
    hideProgressBar();
    return () => showProgressBar();
  }, []);

  return (
    // <SafeAreaView>
    <ImageBackground
      className="h-full w-full flex-1"
      source={require("@/assets/images/imageBg.png")}
    >
      <View className="h-full">
        <View className="mt-[20%] flex-1 items-center justify-start opacity-100">
          <Svg className="shadow-sm" width={117} height={132} fill="none">
            <G filter="url(#a)">
              <Path
                fill="#FCFEFE"
                fillRule="evenodd"
                d="M50.254 106.79V23.21l8.042-4.643 8.043 4.644v27.7L82.423 60.2V32.497l16.085 9.287v46.432l-16.085 9.287V78.772L66.34 69.485v37.305l-8.043 4.643-8.042-4.643ZM34.169 72.581v43.495l20.877 12.053a6.502 6.502 0 0 0 6.5 0l49.797-28.75a6.502 6.502 0 0 0 3.25-5.63V36.25a6.502 6.502 0 0 0-3.25-5.63L61.546 1.87a6.502 6.502 0 0 0-6.5 0L5.25 30.62A6.5 6.5 0 0 0 2 36.25v57.5a6.5 6.5 0 0 0 3.25 5.63l12.834 7.41V81.868l16.085-9.286Zm0-40.084V54.01l-16.084 9.286V41.784l16.084-9.287Z"
                clipRule="evenodd"
              />
            </G>
          </Svg>
          <View className="absolute bottom-0 px-10 pb-12">
            <Text className="mb-2 text-center font-interMedium text-sm text-primary-800">
              Copyright © 2023
              <Text className="font-interBold">
                Intelligent Health Coach ApS
              </Text>{" "}
              All rights reserved
            </Text>
            <Text className="text-center font-interMedium text-xs text-primary-600">
              version 1.1.0
            </Text>
          </View>
        </View>
      </View>
      <BottomSheet
        snapPoints={snapPoints}
        backgroundStyle={{ borderRadius: 50, backgroundColor: "#FCFEFE" }}
        handleIndicatorStyle={{ display: "none" }}
      >
        <View className="mx-4 mt-2 flex-1 items-center justify-between">
          <View className="items-center">
            <Text className="mb-1 font-interBold text-3xl text-gray-900">
              Create account
            </Text>
            <Text className="font-interRegular text-base text-gray-500">
              and experience the power of{" "}
              <Text className="font-interBold text-gray-900 ">iHealth</Text>
            </Text>
          </View>
          <View className="mx-auto w-full items-center">
            <View className="mb-2 flex-row overflow-hidden rounded-md border-2 border-gray-200">
              <Link
                // onPress={handlePress}
                className="flex-1 rounded-md border-gray-200 bg-white-ih px-6 py-4 font-interMedium text-base hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
                // href={path as StaticRoutes}
                href="/createAccount"
                asChild
              >
                <Text className="text-center text-gray-900">
                  Sign in with Google
                </Text>
              </Link>
            </View>
            <View className="mb-2 flex-row overflow-hidden rounded-md border-2 border-gray-200">
              <Link
                // onPress={handlePress}
                className="flex-1 rounded-md border-gray-200 bg-white-ih px-6 py-4 font-interMedium text-base hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
                // href={path as StaticRoutes}
                href="/createAccount"
                asChild
              >
                <Text className="text-center text-gray-900">
                  Sign in with Facebook
                </Text>
              </Link>
            </View>
            <View className="mb-2 flex-row overflow-hidden rounded-md border-2 border-gray-200">
              <Link
                // onPress={handlePress}
                className="flex-1 rounded-md border-gray-200 bg-white-ih px-6 py-4 font-interMedium text-base hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
                // href={path as StaticRoutes}
                href="/createAccount"
                asChild
              >
                <Text className="text-center text-gray-900">
                  Sign in with Apple
                </Text>
              </Link>
            </View>
            <View className="mb-2 flex-row overflow-hidden rounded-md border-2 border-gray-200">
              <Link
                // onPress={handlePress}
                className="flex-1 rounded-md border-gray-200 bg-white-ih px-6 py-4 font-interMedium text-base hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
                // href={path as StaticRoutes}
                href="/createAccount"
                asChild
              >
                <Text className="text-center text-gray-900">
                  Continue with email
                </Text>
              </Link>
            </View>
          </View>
          <View className="mx-4 w-full pb-12">
            <Text className="mb-4 text-center font-interMedium text-base text-gray-400">
              Already have an account?
              <Text className="font-interBold text-gray-500"> Sign in</Text>
            </Text>
          </View>
        </View>
      </BottomSheet>
    </ImageBackground>
    // </SafeAreaView>
  );
};

export default QCreateAccount;
