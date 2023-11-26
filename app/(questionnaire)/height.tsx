import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";

import Button from "@/components/Button";
import Toggle from "@/components/Toggle";
import { useQuestionnaire } from "@/context/useQuestionnaire"; // Import the context hook

const QHeight = () => {
  const { height, setQuestionnaire } = useQuestionnaire(); // Destructure 'height' and 'setQuestionnaire'
  const [value, setValue] = useState(height?.toString() || "");
  const [unit, setUnit] = useState(true); // Assuming default unit is Centimeters

  const handleHeightChange = (newValue) => {
    setValue(newValue);
    setQuestionnaire({ height: parseInt(newValue, 10) || null }); // Update the height in the context
  };

  return (
    <ImageBackground
      className="h-full w-full flex-1"
      source={require("@/assets/images/imageBg.png")}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <View className="flex-1 items-center justify-center">
          <View className="mb-36 w-full">
            <View className="items-center">
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
          <View className="absolute bottom-0 w-full px-4 pb-12">
            <Button progress={0.875} text={"Continue"} path={"/age"} />
            <Text
              onPress={() => router.back()}
              className="mb-4 text-center font-interMedium text-base text-primary-700"
            >
              Back
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
export default QHeight;
