import { View, Text } from "react-native";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import ExerciseDescription from "@/components/Modals/ExerciseDescription/ExerciseDescription";

const ExerciseDescriptionDemo = () => {
  return (
    <View className="flex-1">
      <HeaderWithBackArrow path="/(dev)/workout/modals">
        <Text>Exercise description</Text>
      </HeaderWithBackArrow>
      <View className="flex-1">
        <ExerciseDescription />
      </View>
    </View>
  );
};

export default ExerciseDescriptionDemo;
