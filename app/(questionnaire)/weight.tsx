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
import ButtonBack from "@/components/ButtonBack";

const QWeight = () => {
  const { weight, setQuestionnaire } = useQuestionnaire(); // Destructure 'weight' and 'setQuestionnaire'
  const [value, setValue] = useState(weight?.toString() || "");
  const [unit, setUnit] = useState(true); // Assuming default unit is Kilograms

  const handleWeightChange = (newValue) => {
    setValue(newValue);
    setQuestionnaire({ weight: parseInt(newValue, 10) || null }); // Update the weight in the context
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
                Weight?
              </Text>
              <View className="mb-9 flex items-center justify-center">
                {value === "" && (
                  <Text className="absolute ml-2 font-interRegular text-3xl leading-tight text-[#5ad9c0]">
                    {unit ? "Your weight in kg" : "Your weight in lbs"}
                  </Text>
                )}
                <TextInput
                  className="w-full text-center font-interRegular text-3xl leading-tight text-primary-800"
                  autoFocus={true}
                  onChangeText={(numberString) =>
                    handleWeightChange(numberString)
                  }
                  value={value}
                  placeholderTextColor={"#5ad9c0"}
                  selectionColor={"#134E48"}
                  keyboardType="numeric"
                />
              </View>
              <Toggle
                valueLeft={"Kilograms"}
                valueRight={"Pounds"}
                unit={unit}
                setUnit={setUnit}
              />
            </View>
          </View>
          <View className="absolute bottom-0 w-full px-4 pb-12">
            <Button progress={0.75} text={"Continue"} path={"/height"} />
            <ButtonBack />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
export default QWeight;
