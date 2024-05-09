import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { PanGestureHandler } from "react-native-gesture-handler";

import ButtonOnboarding from "@/components/ButtonOnboarding";
import Toggle from "@/components/Toggle";
import { useQuestionnaire } from "@/context/useQuestionnaire";
import ButtonBack from "@/components/ButtonBack";
import { useProgressBar } from "@/context/useProgressBar";
import Bottom from "@/components/Bottom";
// import Animated, {
//   FadeIn,
//   FadeOut,
//   FadingTransition,
// } from "react-native-reanimated";

const QHeight = () => {
  const { height, setQuestionnaire } = useQuestionnaire();
  const [value, setValue] = useState(height?.toString() || "");
  const [unit, setUnit] = useState(true);

  const router = useRouter();
  const { decrementProgress } = useProgressBar();

  const handleHeightChange = (newValue) => {
    setValue(newValue);
    setQuestionnaire({ height: parseInt(newValue, 10) || null });
  };

  const onGestureEvent = ({ nativeEvent }) => {
    if (nativeEvent.translationX > 0) {
      decrementProgress(12.5);
      router.back();
    }
  };

  return (
    <ImageBackground
      className="h-full w-full flex-1"
      source={require("@/assets/images/imageBg.png")}
    >
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        activeOffsetX={[0, 20]}
        failOffsetY={[-5, 5]}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1 }}
        >
          <View className="flex-1 items-center justify-center">
            <View className="mb-36 w-full">
              <View
                className="items-center"
                // entering={FadeIn}
                // exiting={FadeOut}
              >
                <Text className="mb-2 text-xl font-semibold italic leading-tight text-primary-700">
                  Tell us your
                </Text>
                <Text className="-mt-1 mb-10 font-interExtraBold text-5xl text-primary-900">
                  Height?
                </Text>
                <View className="mb-9  flex items-center justify-center">
                  {value === "" && (
                    <Text className="absolute ml-2 font-interRegular text-3xl leading-tight text-[#5ad9c0]">
                      {unit ? "Your height in cm" : "Your height in inches"}
                    </Text>
                  )}
                  <TextInput
                    className="w-full text-center font-interRegular text-3xl leading-tight text-primary-800"
                    autoFocus={true}
                    onChangeText={(numberString) =>
                      handleHeightChange(numberString)
                    }
                    value={value}
                    placeholderTextColor={"#5ad9c0"}
                    selectionColor={"#134E48"}
                    keyboardType="numeric"
                  />
                </View>
                <Toggle
                  valueLeft={"Centimeters"}
                  valueRight={"Inches"}
                  unit={unit}
                  setUnit={setUnit}
                />
              </View>
            </View>
            <Bottom path="/age" />
          </View>
        </KeyboardAvoidingView>
      </PanGestureHandler>
    </ImageBackground>
  );
};
export default QHeight;
