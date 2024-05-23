import { View, Text } from "react-native";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import ExerciseFilterPicker from "@/components/Modals/ExerciseFilterPicker/ExerciseFilterPicker";

const ExerciseFilterPickerDemo = () => {
  return (
    <View className="flex-1">
      <HeaderWithBackArrow path="/(dev)/workout/modals">
        <Text>Exercise filter picker</Text>
      </HeaderWithBackArrow>
      <View className="flex-1">
        <ExerciseFilterPicker />
      </View>
    </View>
  );
};

export default ExerciseFilterPickerDemo;
