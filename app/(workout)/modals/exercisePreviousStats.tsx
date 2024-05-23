import { View, Text } from "react-native";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import ExercisePreviousStats from "@/components/Modals/ExercisePreviousStats/ExercisePreviousStats";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const ExerciseFilterPickerDemo = () => {
  return (
    // <BottomSheetModalProvider>
    <View className="flex-1">
      <HeaderWithBackArrow path="/(dev)/workout/modals">
        <Text>Exercise previous stats</Text>
      </HeaderWithBackArrow>
      <View className="flex-1">
        <ExercisePreviousStats />
      </View>
    </View>
    // </BottomSheetModalProvider>
  );
};

export default ExerciseFilterPickerDemo;
