import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import { PanGestureHandler } from "react-native-gesture-handler";

import CardRadioButton from "@/components/CardRadioButton";
import { useQuestionnaire } from "@/context/useQuestionnaire";
import { useProgressBar } from "@/context/useProgressBar"; // Import useProgressBar
import Bottom from "@/components/Bottom";

const QFitness = () => {
  const { level, setQuestionnaire } = useQuestionnaire();
  const [value, setValue] = useState(level || "");

  const router = useRouter();
  const { decrementProgress } = useProgressBar(); // Use the context

  const handleValueChange = (newValue) => {
    setValue(newValue);
    setQuestionnaire({ level: newValue });
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
        <View className="mt-6 flex flex-1 items-center">
          <View className="mt-4 flex items-center">
            <Text className="mb-2 text-xl font-semibold italic leading-tight text-primary-700">
              Are you new to
            </Text>
            <Text className="-mt-1 mb-2 font-interExtraBold text-5xl text-primary-900">
              Fitness?
            </Text>
            <Text className="mb-6 font-interMedium text-sm text-primary-700">
              You can always change this later
            </Text>
            <CardRadioButton
              headline={"Yes"}
              body={"I'm a beginner"}
              name={"beginner"}
              value={value}
              setValue={handleValueChange}
            />
            <CardRadioButton
              headline={"Not really"}
              body={"I'm intermediate"}
              name={"intermediate"}
              value={value}
              setValue={handleValueChange}
            />
            <CardRadioButton
              headline={"No"}
              body={"I'm advanced, bro"}
              name={"advanced"}
              value={value}
              setValue={handleValueChange}
            />
          </View>
          <Bottom path="/weight" />
        </View>
      </PanGestureHandler>
    </ImageBackground>
  );
};
export default QFitness;
