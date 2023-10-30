import { View, Text } from "react-native";
import React, { useReducer } from "react";
import Button from "@/components/Button";
import CardCheckBox from "@/components/CardCheckBox";

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
    <View className="flex flex-1 items-center bg-[#66eed1]">
      <View className="w-full items-center justify-center py-3">
        <Text className="h-5">Progress Bar</Text>
      </View>
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
        <Button text={"Continue"} path={"fitness"} />
        <Text className="mb-4 text-center font-interMedium text-base text-primary-700">
          Back
        </Text>
      </View>
    </View>
  );
};
export default Qworkout;
