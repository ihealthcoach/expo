import React from "react";
import { Pressable, View } from "react-native";
import ButtonOnboarding from "./ButtonOnboarding";
import ButtonBack from "./ButtonBack";

type BottomProps = {
  path: string;
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Bottom = ({ path, setIsVisible }: BottomProps) => {
  // const Bottom = ({ path, setIsVisible }) => {
  // onPress = () => {
  //   console.log("pressed");
  // }
  return (
    <Pressable className="absolute bottom-0 w-full px-4 py-2">
      <ButtonOnboarding
        progress={12.5}
        text={"Continue"}
        path={path}
        // setIsVisible={setIsVisible}
      />
      <ButtonBack />
    </Pressable>
  );
};

export default Bottom;
