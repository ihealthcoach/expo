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

import { useQuestionnaire } from "@/context/useQuestionnaire";
import { useProgressBar } from "@/context/useProgressBar";
import Bottom from "@/components/Bottom/Bottom";

const QAge = () => {
  const { age, setQuestionnaire } = useQuestionnaire();
  const [value, setValue] = useState(age?.toString() || "");

  const router = useRouter();
  const { decrementProgress } = useProgressBar();

  const handleAgeChange = (newValue) => {
    setValue(newValue);
    setQuestionnaire({ age: parseInt(newValue, 10) || null });
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
            {/* <View className="absolute top-0 w-full items-start px-4 py-3"></View> */}
            <View className="mb-36 w-full">
              <View className="items-center">
                <Text className="mb-2 text-xl font-semibold italic leading-tight text-primary-700">
                  What is your
                </Text>
                <Text className="-mt-1 mb-10 font-interExtraBold text-5xl text-primary-900">
                  Age?
                </Text>
                <View className="flex items-center justify-center">
                  {value === "" && (
                    <Text className="absolute ml-2 font-interRegular text-3xl leading-tight text-[#5ad9c0]">
                      Age
                    </Text>
                  )}
                  <TextInput
                    className="w-full text-center font-interRegular text-3xl leading-tight text-primary-800"
                    autoFocus={true}
                    onChangeText={(numberString) =>
                      handleAgeChange(numberString)
                    }
                    value={value}
                    placeholderTextColor={"#5ad9c0"}
                    selectionColor={"#134E48"}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>
            <Bottom path="/bodytype" />
          </View>
        </KeyboardAvoidingView>
      </PanGestureHandler>
    </ImageBackground>
  );
};
export default QAge;
