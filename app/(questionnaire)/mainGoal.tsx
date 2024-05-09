// Next component is 'Workout'

// React
import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";

// Expo
import { useRouter } from "expo-router";

// Dependencies
import { PanGestureHandler } from "react-native-gesture-handler";

// Components
import CardRadioButton from "@/components/CardRadioButton";

// Context
import { useQuestionnaire } from "@/context/useQuestionnaire";
import { useProgressBar } from "@/context/useProgressBar";
import Bottom from "@/components/Bottom";

const QMainGoal = () => {
  const { goal, setQuestionnaire } = useQuestionnaire();
  const [value, setValue] = useState(goal || "");

  const router = useRouter();

  const { decrementProgress } = useProgressBar();

  const handleValueChange = (newValue) => {
    setValue(newValue);
    setQuestionnaire({ goal: newValue });
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
        // onHandlerStateChange={({ nativeEvent }) => {
        //   if (nativeEvent.state === State.END) {
        //     console.log("Pan gesture ended");
        //   }
        // }}
        activeOffsetX={[0, 20]}
        failOffsetY={[-5, 5]}
      >
        <View className="mt-6 flex flex-1 items-center">
          <View className="mt-4 flex items-center">
            <Text className="mb-2 text-xl font-semibold italic leading-tight text-primary-700">
              What is your
            </Text>
            <Text className="-mt-1 mb-2 font-interExtraBold text-5xl text-primary-900">
              Main goal?
            </Text>
            <Text className="mb-6 font-interMedium text-sm text-primary-700">
              You can always change this later
            </Text>
            <CardRadioButton
              headline={"Look Muscular & Toned"}
              body={"Muscle size & visibility"}
              name={"tone"}
              value={value}
              setValue={handleValueChange}
            />
            <CardRadioButton
              headline={"Get Stronger, Faster"}
              body={"Lift more weight"}
              name={"strength"}
              value={value}
              setValue={handleValueChange}
            />
            <CardRadioButton
              headline={"Lose Fat"}
              body={"Burn a lot of calories"}
              name={"weight-loss"}
              value={value}
              setValue={handleValueChange}
            />
          </View>
          <Bottom path="/workout" />
        </View>
      </PanGestureHandler>
    </ImageBackground>
  );
};
export default QMainGoal;
