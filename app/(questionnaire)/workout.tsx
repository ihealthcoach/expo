import React, { useReducer } from "react";
import { View, Text, ImageBackground } from "react-native";
import { router } from "expo-router";

import Button from "@/components/Button";
import CardCheckBox from "@/components/CardCheckBox";
import ProgressBar from "@/components/ProgressBar";

const Qworkout = () => {
  const [checkedState, dispatch] = useReducer(
    (
      state: { [x: string]: any },
      action: { type: any; payload: string | number },
    ) => {
      switch (action.type) {
        case "toggle":
          return { ...state, [action.payload]: !state[action.payload] };
        default:
          throw new Error();
      }
    },
    {},
  );

  const toggleChecked = (name: string) => {
    dispatch({ type: "toggle", payload: name });
  };

  return (
    <ImageBackground
      className="h-full w-full flex-1"
      source={require("@/assets/images/imageBg.png")}
    >
      <View className="mt-6 flex flex-1 items-center">
        {/* <View className="w-full items-start justify-center px-4 py-3">
          <ProgressBar />
        </View> */}
        <View className="mt-4 flex items-center">
          <Text className="mb-2 text-xl font-semibold italic leading-tight text-primary-700">
            How often would you like to
          </Text>
          <Text className="-mt-1 mb-2 font-interExtraBold text-5xl text-primary-900">
            Workout?
          </Text>
          <Text className="mb-6 font-interMedium text-sm text-primary-700">
            We recommend at least 3x per week
          </Text>
          <CardCheckBox
            headline={"2x per week"}
            body={null}
            isChecked={checkedState["2x per week"] || false}
            setIsChecked={() => toggleChecked("2x per week")}
          />
          <CardCheckBox
            headline={"3x per week"}
            body={null}
            isChecked={checkedState["3x per week"] || false}
            setIsChecked={() => toggleChecked("3x per week")}
          />
          <CardCheckBox
            headline={"4x per week"}
            body={null}
            isChecked={checkedState["4x per week"] || false}
            setIsChecked={() => toggleChecked("4x per week")}
          />
          <CardCheckBox
            headline={"5x per week"}
            body={null}
            isChecked={checkedState["5x per week"] || false}
            setIsChecked={() => toggleChecked("5x per week")}
          />
          <CardCheckBox
            headline={"6x per week"}
            body={null}
            isChecked={checkedState["6x per week"] || false}
            setIsChecked={() => toggleChecked("6x per week")}
          />
          <CardCheckBox
            headline={"7x per week"}
            body={null}
            isChecked={checkedState["7x per week"] || false}
            setIsChecked={() => toggleChecked("7x per week")}
          />
        </View>
        <View className="absolute bottom-0 w-full px-4 pb-12">
          <Button progress={0.5} text={"Continue"} path={"/fitness"} />
          <Text
            onPress={() => router.back()}
            className="mb-4 text-center font-interMedium text-base text-primary-700"
          >
            Back
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Qworkout;
