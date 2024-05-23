import { View, Text } from "react-native";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import ExerciseFilters from "@/components/Modals/ExerciseFilters/ExerciseFilters";

const ExerciseFilterDemo = () => {
  return (
    <View className="flex-1">
      <HeaderWithBackArrow path="/(workout)/modals">
        <Text>Exercise filters modal</Text>
      </HeaderWithBackArrow>
      <View className="flex-1">
        <ExerciseFilters />
      </View>
    </View>
  );
};

export default ExerciseFilterDemo;
