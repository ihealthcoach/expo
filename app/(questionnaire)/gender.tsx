// Next component is 'Main Goal'

import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

// Components
import Button from "@/components/Button";
import CardRadioButton from "@/components/CardRadioButton";

// Context
import { useQuestionnaire } from "@/context/useQuestionnaire";
import ButtonBack from "@/components/ButtonBack";
import Bottom from "@/components/Bottom";
import Animated, { FadeIn, FadeOutLeft } from "react-native-reanimated";

const QGender = () => {
  const { gender, setQuestionnaire } = useQuestionnaire();
  const [value, setValue] = useState(gender || "");
  const [isVisible, setIsVisible] = useState(true);

  const onGestureEvent = (event) => {
    console.log("Pan gesture event:", event.nativeEvent);
  };

  const handleValueChange = (newValue) => {
    setValue(newValue);
    setQuestionnaire({ gender: newValue });
  };

  const handleHideComponent = () => {
    console.log("handleHideComponent");
    setIsVisible(false);
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.END) {
          console.log("Pan gesture ended");
        }
      }}
    >
      <ImageBackground
        className="h-full w-full flex-1"
        source={require("@/assets/images/imageBg.png")}
      >
        <View className="flex-1 items-center justify-center">
          <View className="mb-36 w-full">
            {isVisible && (
              <Animated.View
                className="items-center"
                entering={FadeIn}
                exiting={FadeOutLeft.duration(100)}
              >
                <Text className="mb-2 text-xl font-semibold italic leading-tight text-primary-700">
                  What is your
                </Text>
                <Text className="-mt-1 mb-6 font-interExtraBold text-5xl leading-tight text-primary-900">
                  Gender?
                </Text>
                <CardRadioButton
                  headline={"Male"}
                  body={null}
                  name={"male"}
                  value={value}
                  setValue={handleValueChange}
                />
                <CardRadioButton
                  headline={"Female"}
                  body={null}
                  name={"female"}
                  value={value}
                  setValue={handleValueChange}
                />
                <CardRadioButton
                  headline={"I'd rather not say"}
                  body={null}
                  name={"unknown"}
                  value={value}
                  setValue={handleValueChange}
                />
              </Animated.View>
            )}
          </View>
          <Bottom path="/mainGoal" setIsVisible={setIsVisible} />
        </View>
      </ImageBackground>
    </PanGestureHandler>
  );
};
export default QGender;
