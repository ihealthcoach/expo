import React from "react";
import { View } from "react-native";
import Button from "./Button";
import ButtonBack from "./ButtonBack";

const Bottom = ({ path }) => {
  return (
    <View className="absolute bottom-0 w-full px-4 pb-6">
      <Button progress={12.5} text={"Continue"} path={path} />
      <ButtonBack />
    </View>
  );
};

export default Bottom;
