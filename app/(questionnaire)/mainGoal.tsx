// Next component is 'Workout'

// React
import React, { useState } from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";

// Expo
import { useRouter } from "expo-router";

// Dependencies
import { PanGestureHandler, State } from "react-native-gesture-handler";

// Components
import ButtonOnboarding from "@/components/ButtonOnboarding";
import CardRadioButton from "@/components/CardRadioButton";
import ButtonBack from "@/components/ButtonBack";

// Context
import { useQuestionnaire } from "@/context/useQuestionnaire";
import { useProgressBar } from "@/context/useProgressBar";
import Bottom from "@/components/Bottom";
// import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";

const QMainGoal = () => {
  const { goal, setQuestionnaire } = useQuestionnaire();
  const [value, setValue] = useState(goal || "");
  // const [isVisible, setIsVisible] = useState(true);

  const router = useRouter();

  const { decrementProgress } = useProgressBar();

  const handleValueChange = (newValue) => {
    setValue(newValue);
    setQuestionnaire({ goal: newValue });
  };

  const onGestureEvent = ({ nativeEvent }) => {
    // setIsVisible(true);
    if (nativeEvent.translationX > 0) {
      decrementProgress(12.5);
      router.back();
    }
  };

  // const handleHideComponent = () => {
  //   console.log("handleHideComponent");
  //   setIsVisible(false);
  // };

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
          {/* {isVisible && ( */}
          <View
            className="mt-4 flex items-center"
            // entering={FadeInRight}
            // exiting={FadeOutLeft}
          >
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
          {/* )} */}
          {/* <Pressable onPress={() => setIsVisible(false)}> */}
          {/* <Pressable
            className="border-2 border-red-500"
            onPress={handleHideComponent}
          > */}
          {/* <Text>Testing Reanimated</Text> */}
          <Bottom path="/workout" />
          {/* <Bottom path="/workout" setIsVisible={setIsVisible} /> */}
          {/* </Pressable> */}
          {/* </Pressable> */}
        </View>
      </PanGestureHandler>
    </ImageBackground>
  );
};
export default QMainGoal;
