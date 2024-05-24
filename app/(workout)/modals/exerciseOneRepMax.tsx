import { View, Text } from "react-native";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import ExerciseOneRepMax from "@/components/Modals/ExerciseOneRepMax/ExerciseOneRepMax";

const ExerciseOneRepMaxDemo = () => {
  return (
    <View className="flex-1">
      <HeaderWithBackArrow path="/(dev)/workout/modals">
        <Text>Exercise one rep max</Text>
      </HeaderWithBackArrow>
      <View className="flex-1">
        <ExerciseOneRepMax />
      </View>
    </View>
  );
};

export default ExerciseOneRepMaxDemo;
